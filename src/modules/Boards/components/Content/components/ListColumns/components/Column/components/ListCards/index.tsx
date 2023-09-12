import { mapOrder } from '@/utils/sort';
import ListCardsView from './view';
import { Card } from '@/types/card.type';

type ListCardsProps = {
  cards: Card[];
  columnId: string;
  cardOrderIds: string[];
};

function ListCards({ cards, columnId, cardOrderIds }: ListCardsProps) {
  const orderedCards = mapOrder(cards, cardOrderIds, '_id');
  return <ListCardsView cards={orderedCards} columnId={columnId} />;
}

export default ListCards;
