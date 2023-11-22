import { useRouter } from 'next/navigation';
import { CardResult } from '@/types/search.type';
import CardsView from './view';

type CardsProps = {
  cards: CardResult[] | undefined;
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
