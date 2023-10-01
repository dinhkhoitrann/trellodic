import { useState, useEffect, ChangeEvent } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import ChecklistView from './view';
import { Checklist as ChecklistType } from '@/types/card.type';
import {
  useAddChecklistItemMutation,
  useDeleteChecklistMutation,
  useDeleteChecklistItemMutation,
  useMarkChecklistItemDoneMutation,
} from '@/redux/services/card';

type ChecklistProps = {
  checklist: ChecklistType;
};

function Checklist({ checklist }: ChecklistProps) {
  const [progress, setProgress] = useState<number>();
  const { boardId } = useParams();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');

  const [deleteCheckList] = useDeleteChecklistMutation();
  const [markItemDone] = useMarkChecklistItemDoneMutation();
  const [deleteItem] = useDeleteChecklistItemMutation();
  const [addChecklistItem] = useAddChecklistItemMutation();

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
      cardId: cardId!,
      boardId: boardId.toString(),
    });
  };

  const handleDeleteItem = (params: any[]) => {
    const [itemId] = params;
    deleteItem({ itemId, checklistId: checklist._id, cardId: cardId!, boardId: boardId.toString() });
  };

  const handleDeleteChecklist = (checklistId: string) => {
    deleteCheckList({ checklistId, cardId: cardId!, boardId: boardId.toString() });
  };

  const handleAddItem = (title: string) => {
    addChecklistItem({ title, checklistId: checklist._id, cardId: cardId!, boardId: boardId.toString() });
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

export default Checklist;
