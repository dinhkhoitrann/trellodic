import { mapOrder } from '@/utils/sort';
import ListCardsView from './view';

type ListCardsProps = {
  cards: any;
  cardOrderIds: string[];
};

function ListCards({ cards, cardOrderIds }: ListCardsProps) {
  const orderedCards = mapOrder(cards, cardOrderIds, '_id');
  return <ListCardsView cards={orderedCards} />;
}

export default ListCards;
