import { useEffect, useState } from 'react';
import { DndContext, DragEndEvent, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import BoardContentView from './view';
import { mapOrder } from '@/utils/sort';
import { Board } from '@/types/board.type';

type BoardContentProps = {
  board: Board;
};

function BoardContent({ board: boardProp }: BoardContentProps) {
  const [board, setBoard] = useState(boardProp);
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

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over?.id) {
      const oldIndex = board?.columns?.findIndex((column) => column._id === active.id);
      const newIndex = board?.columns?.findIndex((column) => column._id === over?.id);
      const dndOrderedColumns = arrayMove(board?.columns, oldIndex, newIndex);
      // TODO: Then, store Column Order Ids to DB
      setBoard((prevBoard) => ({ ...prevBoard, columns: [...dndOrderedColumns] }));
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <BoardContentView board={board} />
    </DndContext>
  );
}

export default BoardContent;
