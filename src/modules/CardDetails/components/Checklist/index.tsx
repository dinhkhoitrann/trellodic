import { useState, useEffect, ChangeEvent } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import ChecklistView from './view';
import { Checklist as ChecklistType, ChecklistItem } from '@/types/card.type';
import { useDeleteChecklistMutation } from '@/redux/services/card';

type ChecklistProps = {
  checklist: ChecklistType;
};

function Checklist({ checklist }: ChecklistProps) {
  const [items, setItems] = useState<ChecklistItem[]>(checklist?.items || []);
  const [progress, setProgress] = useState<number>();
  const [trigger] = useDeleteChecklistMutation();
  const { boardId } = useParams();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');

  useEffect(() => {
    let numberOfCheckedItems = 0;
    items.forEach((item) => {
      if (item.isDone) {
        numberOfCheckedItems++;
      }
    });

    setProgress((numberOfCheckedItems / items.length) * 100);
  }, [items]);

  const handleItemDone = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedItems = [...items];
    const selectedItemIndex = updatedItems.findIndex((item) => item._id === event.target.name);
    updatedItems[selectedItemIndex].isDone = !updatedItems[selectedItemIndex].isDone;
    setItems(updatedItems);
  };

  const handleDeleteItem = (params: any[]) => {
    const [itemId] = params;
    const updatedItems = [...items];
    const filteredItems = updatedItems.filter((item) => item._id !== itemId);
    setItems(filteredItems);
  };

  const handleDeleteChecklist = (checklistId: string) => {
    trigger({ checklistId, cardId: cardId!, boardId: boardId.toString() });
  };

  const handleAddItem = (title: string) => {
    const item: ChecklistItem = {
      _id: Math.random().toString(),
      title: title,
      isDone: false,
    };
    setItems((prevState) => [...prevState, item]);
  };

  return (
    <ChecklistView
      checklist={checklist}
      items={items}
      progress={progress}
      onItemDone={handleItemDone}
      onAdd={handleAddItem}
      onDeleteItem={handleDeleteItem}
      onDeleteChecklist={handleDeleteChecklist}
    />
  );
}

export default Checklist;
