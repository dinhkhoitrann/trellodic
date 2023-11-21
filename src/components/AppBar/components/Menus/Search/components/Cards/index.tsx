import { useRouter } from 'next/navigation';
import { CardResult } from '@/types/search.type';
import CardsView from './view';

type CardsProps = {
  cards: CardResult[] | undefined;
};

function Cards({ cards }: CardsProps) {
  const router = useRouter();

  const handleViewCard = (boardId: string, cardId: string) => {
    router.push(`/boards/${boardId}?cardId=${cardId}`);
  };

  return <CardsView cards={cards} onViewCard={handleViewCard} />;
}

export default Cards;
