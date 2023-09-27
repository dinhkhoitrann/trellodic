import { useState, useEffect, ChangeEvent } from 'react';
import ChecklistView from './view';
import { Checklist as ChecklistType, ChecklistItem } from '@/types/card.type';

type ChecklistProps = {
  checklist: ChecklistType;
};

function Checklist({ checklist }: ChecklistProps) {
  const [items, setItems] = useState<ChecklistItem[]>(checklist?.items || []);
  const [progress, setProgress] = useState<number>();

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
    console.log(checklistId);
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
