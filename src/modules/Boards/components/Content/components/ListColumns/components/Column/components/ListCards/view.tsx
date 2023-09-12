import Box from '@mui/material/Box';
import { useTheme } from '@mui/styles';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CustomThemeOptions } from '@/common/styles/theme';
import Card from './components/Card';
import { Card as CardType } from '@/types/card.type';
import AddCardSection from './components/AddCardSection';

type ListCardsViewProps = {
  cards: CardType[];
  columnId: string;
};

function ListCardsView({ cards, columnId }: ListCardsViewProps) {
  const theme = useTheme<CustomThemeOptions>();

  return (
    <SortableContext items={cards?.map((card) => card._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          p: '0 5px',
          m: '0 5px',
          overflowX: 'hidden',
          overflowY: 'auto',
          maxHeight: `calc(${theme.customProps.boardContentHeight} -
          40px - ${theme.customProps.columnHeaderHeight} - ${theme.customProps.columnFooterHeight})`,
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#ced0da',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#bfc2cf',
          },
        }}
      >
        {cards?.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </Box>
      <Box sx={{ px: 1, pt: 1 }}>
        <AddCardSection columnId={columnId} />
      </Box>
    </SortableContext>
  );
}

export default ListCardsView;
