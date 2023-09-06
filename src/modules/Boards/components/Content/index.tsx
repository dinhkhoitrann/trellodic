import { useEffect, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  closestCorners,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { cloneDeep } from 'lodash';
import BoardContentView from './view';
import { mapOrder } from '@/utils/sort';
import { Board } from '@/types/board.type';
import { ACTIVE_DRAG_ITEM_TYPE } from './constants';

type BoardContentProps = {
  board: Board;
};

function BoardContent({ board: boardProp }: BoardContentProps) {
  const [board, setBoard] = useState(boardProp);
  const [activeDragItemId, setActiveDragItemId] = useState<string | null>(null);
  const [activeDragItemType, setActiveDragItemType] = useState<string | null>(null);
  const [activeDragItemData, setActiveDragItemData] = useState<any | null>(null);
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

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragItemId(event?.active?.id.toString());
    setActiveDragItemType(
      event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN,
    );
    setActiveDragItemData(event?.active?.data?.current);
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
      setBoard((prevBoard) => {
        const overCardIndex = overColumn?.cards?.findIndex((card) => card._id === overCardId.toString());

        let newCardIndex: number;
        const isBelowOverItem =
          active.rect.current.translated && active.rect.current.translated.top > over.rect.top + over.rect.height;

        const modifier = isBelowOverItem ? 1 : 0;
        newCardIndex = overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1;

        const nextColumns = cloneDeep(prevBoard?.columns);
        const nextActiveColumn = nextColumns.find((column) => column._id === activeColumn._id);
        const nextOverColumn = nextColumns.find((column) => column._id === overColumn._id);

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter((card) => card._id !== activeDraggingCardId);
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map((card) => card._id);
        }

        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter((card) => card._id !== activeDraggingCardId);
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(newCardIndex, 0, activeDraggingCardData);
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map((card) => card._id);
        }

        return { ...prevBoard, columns: [...nextColumns] };
      });
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD) return;

    const { active, over } = event;
    if (!over) return;

    if (active.id !== over?.id) {
      const oldIndex = board?.columns?.findIndex((column) => column._id === active.id);
      const newIndex = board?.columns?.findIndex((column) => column._id === over?.id);
      const dndOrderedColumns = arrayMove(board?.columns, oldIndex, newIndex);
      // TODO: Then, store Column Order Ids to DB
      setBoard((prevBoard) => ({ ...prevBoard, columns: [...dndOrderedColumns] }));
    }

    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <BoardContentView board={board} activeDragItemType={activeDragItemType} activeDragItemData={activeDragItemData} />
    </DndContext>
  );
}

export default BoardContent;
