import { useState } from 'react';
import { mapOrder } from '@/utils/sort';
import ListCardsView from './view';
import { Card } from '@/types/card.type';

type ListCardsProps = {
  cards: Card[];
  columnId: string;
  cardOrderIds: string[];
};

function ListCards({ cards, columnId, cardOrderIds }: ListCardsProps) {
  const [isAddingMode, setIsAddingMode] = useState(false);
  const orderedCards = mapOrder(cards, cardOrderIds, '_id');

  const handleAddingMode = () => {
    setIsAddingMode(true);
  };

  const handleCancelAddingMode = () => {
    setIsAddingMode(false);
  };

  return (
    <ListCardsView
      cards={orderedCards}
      columnId={columnId}
      isAddingMode={isAddingMode}
      onAddingMode={handleAddingMode}
      onCancelAddingMode={handleCancelAddingMode}
    />
  );
}

export default ListCards;
