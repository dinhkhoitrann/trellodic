import { useEffect, useState } from 'react';
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
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

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDragItemId(event?.active?.id.toString());
    setActiveDragItemType(
      event?.active?.data?.current?.columnId ? ACTIVE_DRAG_ITEM_TYPE.CARD : ACTIVE_DRAG_ITEM_TYPE.COLUMN,
    );
    setActiveDragItemData(event?.active?.data?.current);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    console.log(event);
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
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <BoardContentView board={board} activeDragItemType={activeDragItemType} activeDragItemData={activeDragItemData} />
    </DndContext>
  );
}

export default BoardContent;
