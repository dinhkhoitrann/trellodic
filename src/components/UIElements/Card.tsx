import MUICard, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

function Card(props: CardProps) {
  return <MUICard {...props} />;
}

Card.Actions = CardActions;
Card.Content = CardContent;
Card.Media = CardMedia;

export default Card;
