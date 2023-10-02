import { useState, useEffect, ChangeEvent } from 'react';
import ChecklistView from './view';
import { Checklist as ChecklistType } from '@/types/card.type';
import {
  useAddChecklistItemMutation,
  useDeleteChecklistMutation,
  useDeleteChecklistItemMutation,
  useMarkChecklistItemDoneMutation,
} from '@/redux/services/card/checklist';
import withBoard from '@/hocs/withBoard';

type ChecklistProps = {
  checklist: ChecklistType;
  boardId: string;
  cardId: string;
  onRefreshCard: () => void;
};

function Checklist({ checklist, boardId, cardId, onRefreshCard }: ChecklistProps) {
  const [progress, setProgress] = useState<number>();
  const [deleteCheckList] = useDeleteChecklistMutation();
  const [markItemDone] = useMarkChecklistItemDoneMutation();
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

  const handleItemDone = async (event: ChangeEvent<HTMLInputElement>) => {
    await markItemDone({
      itemId: event.target.name,
      checklistId: checklist._id,
      cardId: cardId,
      boardId: boardId,
    });
    onRefreshCard();
  };

  const handleDeleteItem = async (params: any[]) => {
    const [itemId] = params;
    await deleteItem({ itemId, checklistId: checklist._id, cardId: cardId, boardId: boardId });
    onRefreshCard();
  };

  const handleDeleteChecklist = async (checklistId: string) => {
    await deleteCheckList({ checklistId, cardId: cardId, boardId: boardId });
    onRefreshCard();
  };

  const handleAddItem = async (title: string) => {
    await addItem({ title, checklistId: checklist._id, cardId: cardId, boardId: boardId });
    onRefreshCard();
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
