import { useRouter, usePathname } from 'next/navigation';
import { Card as CardType } from '@/types/card.type';
import CardView from './view';

type CardProps = {
  card: CardType;
};

function Card({ card }: CardProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleShowDetails = () => {
    router.push(`${pathname}?cardId=${card._id}`);
  };

  return <CardView card={card} onShowDetails={handleShowDetails} />;
}

export default Card;
