import LaptopIcon from '@mui/icons-material/Laptop';
import { Box, List, Typography } from '@/components/UIElements';
import { Card } from '@/types/card.type';
import ResultItem from '../ResultItem';

type CardsViewProps = {
  cards: Card[] | undefined;
  onViewCard: (_boardId: string, _cardId: string) => void;
};

function CardsView({ cards, onViewCard }: CardsViewProps) {
  if (!cards || cards.length === 0) {
    return;
  }

  return (
    <Box>
      <Typography sx={{ fontSize: '12px !important', fontWeight: '600', mt: 2, ml: 2 }}>CARDS</Typography>
      <List sx={{ width: '100%' }}>
        {cards.map((card) => (
          <ResultItem
            key={card._id}
            startIcon={<LaptopIcon />}
            primaryText={card.title}
            onClick={() => onViewCard(card.boardId, card._id)}
          />
        ))}
      </List>
    </Box>
  );
}

export default CardsView;
