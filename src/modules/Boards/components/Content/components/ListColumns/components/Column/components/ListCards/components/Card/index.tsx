import { Card as CardType } from '@/types/card.type';
import CardView from './view';

type CardProps = {
  card: CardType;
};

function Card({ card }: CardProps) {
  return <CardView card={card} />;
}

export default Card;
