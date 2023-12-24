import { useState, useEffect, ChangeEvent } from 'react';
import ChecklistView from './view';
import { Checklist as ChecklistType } from '@/types/card.type';
import {
  useAddChecklistItemMutation,
  useDeleteChecklistMutation,
  useDeleteChecklistItemMutation,
  useUpdateChecklistItemMutation,
} from '@/redux/services/card/checklist';
import { withBoard, BoardGlobalProps } from '@/hocs';

type ChecklistProps = BoardGlobalProps & {
  checklist: ChecklistType;
};

function Checklist({ checklist, boardId, cardId, onRefreshCard }: ChecklistProps) {
  const [progress, setProgress] = useState<number>();
  const [deleteCheckList] = useDeleteChecklistMutation();
  const [markItemDone] = useUpdateChecklistItemMutation();
  const [deleteItem] = useDeleteChecklistItemMutation();
  const [addItem] = useAddChecklistItemMutation();

  useEffect(() => {
    let numberOfCheckedItems = 0;
    checklist.items.forEach((item) => {
      if (item.isDone) {
        numberOfCheckedItems++;
      }
    });

    setProgress((numberOfCheckedItems / checklist.items.length) * 100);
  }, [checklist.items]);

  const handleItemDone = (event: ChangeEvent<HTMLInputElement>) => {
    markItemDone({
      itemId: event.target.name,
      checklistId: checklist._id,
      cardId: cardId,
      isDone: event.target.checked,
      onSuccess: onRefreshCard,
    });
  };

  const handleDeleteItem = (params: any[]) => {
    const [itemId] = params;
    deleteItem({
      itemId,
      checklistId: checklist._id,
      cardId: cardId,
      boardId: boardId,
      onSuccess: onRefreshCard,
    });
  };

  const handleDeleteChecklist = (checklistId: string) => {
    deleteCheckList({ checklistId, cardId, onSuccess: onRefreshCard });
  };

  const handleAddItem = (title: string) => {
    addItem({ title, checklistId: checklist._id, cardId, onSuccess: onRefreshCard });
  };

  return (
    <ChecklistView
      checklist={checklist}
      items={checklist.items}
      progress={progress}
      onItemDone={handleItemDone}
      onAdd={handleAddItem}
      onDeleteItem={handleDeleteItem}
      onDeleteChecklist={handleDeleteChecklist}
    />
  );
}

export default withBoard(Checklist);
