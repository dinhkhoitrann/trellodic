import CardView from './view';

type CardProps = {
  card: any;
};

function Card({ card }: CardProps) {
  return <CardView card={card} />;
}

export default Card;
