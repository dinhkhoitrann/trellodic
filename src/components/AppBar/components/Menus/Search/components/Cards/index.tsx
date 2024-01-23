import { useRouter } from 'next/navigation';
import { Card } from '@/types/card.type';
import CardsView from './view';

type CardsProps = {
  cards: Card[] | undefined;
  onCloseResult: () => void;
};

function Cards({ cards, onCloseResult }: CardsProps) {
  const router = useRouter();

  const handleViewCard = (boardId: string, cardId: string) => {
    onCloseResult();
    router.push(`/boards/${boardId}?cardId=${cardId}`);
  };

  return <CardsView cards={cards} onViewCard={handleViewCard} />;
}

export default Cards;
