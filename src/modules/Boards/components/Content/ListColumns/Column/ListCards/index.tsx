import { mapOrder } from '@/utils/sort';
import ListCardsView from './view';
import { Card } from '@/types/card.type';

type ListCardsProps = {
  cards: Card[];
  cardOrderIds: string[];
};

function ListCards({ cards, cardOrderIds }: ListCardsProps) {
  const orderedCards = mapOrder(cards, cardOrderIds, '_id');
  return <ListCardsView cards={orderedCards} />;
}

export default ListCards;
