'use client';
import { useCallback, useEffect, useState, useRef } from 'react';
import {
  Active,
  CollisionDetection,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  MouseSensor,
  Over,
  TouchSensor,
  UniqueIdentifier,
  closestCorners,
  getFirstCollision,
  pointerWithin,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { cloneDeep, isEmpty } from 'lodash';
import BoardContentView from './view';
import { mapOrder } from '@/utils/sort';
import { Board } from '@/types/board.type';
import { ACTIVE_DRAG_ITEM_TYPE } from './constants';
import { Column } from '@/types/column.type';
import { generatePlaceholderCard } from '@/utils/card';
import { useGetBoardDetailsQuery } from '@/redux/services/board/board';
import withBoard from '@/hocs/withBoard';

type BoardContentProps = {
  boardId: string;
  board: Board;
};

function BoardContent({ boardId, board: boardProp }: BoardContentProps) {
  const { data } = useGetBoardDetailsQuery(
    { boardId },
    { pollingInterval: 60000 * 5, refetchOnFocus: true, refetchOnReconnect: true },
  );

  const [board, setBoard] = useState(data || boardProp);
  const [activeDragItemId, setActiveDragItemId] = useState<string | null>(null);
  const [activeDragItemType, setActiveDragItemType] = useState<string | null>(null);
  const [activeDragItemData, setActiveDragItemData] = useState<any | null>(null);
  const [oldColumnWhenDraggingCard, setOldColumnWhenDraggingCard] = useState<Column | undefined>();
  const lastOverId = useRef<UniqueIdentifier | null>(null);
  // Use MouseSensor and TouchSensor rather than PointerSensor for better experience in mobile
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 250,
      tolerance: 500,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  // Handle flickering when dragging cards between columns
  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {
      if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
        return closestCorners({ ...args });
      }

      const pointerIntersections = pointerWithin(args);
      // Check if user drag card to outside of the valid area
      if (pointerIntersections?.length === 0) return [];

      let overId = getFirstCollision(pointerIntersections, 'id');

      if (overId) {
        // If overId is a column id, try to find the closest card id within collision area based on
        // closestCenter or closestCorners, but closestCorners brings to a smoother experience
        const existingColumn = board?.columns?.find((column) => column._id === overId);
        if (existingColumn) {
          overId = closestCorners({
            ...args,
            droppableContainers: args.droppableContainers.filter(
              (container) => container.id !== overId && existingColumn?.cardOrderIds?.includes(container.id.toString()),
            ),
          })[0]?.id;
        }

        lastOverId.current = overId;
        return [{ id: overId }];
      }

      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeDragItemType, board?.columns],
  );

  useEffect(() => {
    setBoard((prevBoard) => {
      const orderedColumns = mapOrder(boardProp?.columns, boardProp?.columnOrderIds, '_id');
      return {
        ...prevBoard,
        columns: [...orderedColumns],
      };
    });
  }, [boardProp?.columnOrderIds, boardProp?.columns]);

  const findColumnByCardId = (cardId: string) => {
    return board?.columns?.find((column) => column.cards.map((card) => card._id)?.includes(cardId));
  };

  const moveCardBetweenDifferentColumns = (
    overColumn: Column,
    overCardId: UniqueIdentifier,
    active: Active,
    over: Over,
    activeColumn: Column,
    activeDraggingCardId: UniqueIdentifier,
    activeDraggingCardData: any,
  ) => {
    setBoard((prevBoard) => {
      const overCardIndex = overColumn?.cards?.findIndex((card) => card._id === overCardId.toString());

      const isBelowOverItem =
        active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;

      const modifier = isBelowOverItem ? 1 : 0;
      const newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1;

      const nextColumns = cloneDeep(prevBoard?.columns);
      const nextActiveColumn = nextColumns.find((column) => column._id === activeColumn._id);
      const nextOverColumn = nextColumns.find((column) => column._id === overColumn._id);

      if (nextActiveColumn) {
        nextActiveColumn.cards = nextActiveColumn.cards.filter((card) => card._id !== activeDraggingCardId);
        if (isEmpty(nextActiveColumn.cards)) {
          nextActiveColumn.cards = [generatePlaceholderCard(nextActiveColumn)];
        }

        nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map((card) => card._id);
      }

      if (nextOverColumn) {
        nextOverColumn.cards = nextOverColumn.cards.filter((card) => card._id !== activeDraggingCardId);
        const rebuild_activeDraggingCardData = {
          ...activeDraggingCardData,
          columnId: nextOverColumn._id,
        };
        const clonedNextOverCards = [...nextOverColumn.cards];
        clonedNextOverCards.splice(newCardIndex, 0, rebuild_activeDraggingCardData);
        nextOverColumn.cards = [...clonedNextOverCards];
        nextOverColumn.cards = nextOverColumn.cards.filter((card) => !card.FE_isPlaceholderCard);

        nextOverColumn.cardOrderIds = nextOverColumn.cards.map((card) => card._id);
      }

      return { ...prevBoard, columns: [...nextColumns] };
    });
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragItemId(event?.active?.id.toString());
    setActiveDragItemType(
      event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN,
    );
    setActiveDragItemData(event?.active?.data?.current);

    if (event?.active?.data?.current?.columnId) {
      setOldColumnWhenDraggingCard(findColumnByCardId(event?.active?.id.toString()));
    }
  };

  const handleDragOver = (event: DragOverEvent) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return;

    const { active, over } = event;
    if (!active || !over) return;

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;
    const { id: overCardId } = over;

    const activeColumn = findColumnByCardId(activeDraggingCardId.toString());
    const overColumn = findColumnByCardId(overCardId.toString());

    if (!activeColumn || !overColumn) return;

    if (activeColumn._id !== overColumn._id) {
      moveCardBetweenDifferentColumns(
        overColumn,
        overCardId,
        active,
        over,
        activeColumn,
        activeDraggingCardId,
        activeDraggingCardData,
      );
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!active || !over) return;

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) {
      const {
        id: activeDraggingCardId,
        data: { current: activeDraggingCardData },
      } = active;
      const { id: overCardId } = over;

      const activeColumn = findColumnByCardId(activeDraggingCardId.toString());
      const overColumn = findColumnByCardId(overCardId.toString());

      if (!activeColumn || !overColumn) return;

      if (oldColumnWhenDraggingCard?._id !== overColumn._id) {
        moveCardBetweenDifferentColumns(
          overColumn,
          overCardId,
          active,
          over,
          activeColumn,
          activeDraggingCardId,
          activeDraggingCardData,
        );
      } else {
        const oldCardIndex = oldColumnWhenDraggingCard?.cards?.findIndex((card) => card._id === activeDragItemId);
        const newCardIndex = overColumn?.cards?.findIndex((card) => card._id === overCardId);
        const dndOrderedCards = arrayMove(oldColumnWhenDraggingCard?.cards, oldCardIndex, newCardIndex);

        setBoard((prevBoard) => {
          const nextColumns = cloneDeep(prevBoard?.columns);

          const targetColumn = nextColumns.find((column) => column._id === overColumn._id);
          if (targetColumn) {
            targetColumn.cards = dndOrderedCards;
            targetColumn.cardOrderIds = dndOrderedCards.map((card) => card._id);
          }

          return { ...prevBoard, columns: [...nextColumns] };
        });
      }
    }

    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) {
      if (active.id !== over?.id) {
        const oldColumnIndex = board?.columns?.findIndex((column) => column._id === active.id);
        const newColumnIndex = board?.columns?.findIndex((column) => column._id === over?.id);
        const dndOrderedColumns = arrayMove(board?.columns, oldColumnIndex, newColumnIndex);
        // TODO: Then, store Column Order Ids to DB
        setBoard((prevBoard) => ({ ...prevBoard, columns: [...dndOrderedColumns] }));
      }
    }

    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
    setOldColumnWhenDraggingCard(undefined);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <BoardContentView board={board} activeDragItemType={activeDragItemType} activeDragItemData={activeDragItemData} />
    </DndContext>
  );
}

export default withBoard(BoardContent);
