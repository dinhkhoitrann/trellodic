import { isEmpty } from 'lodash';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { Box } from '@/components/UIElements';
import { useAppSelector } from '@/redux/store';
import { selectBoardFilter } from '@/redux/slices/board';
import { useCustomTheme } from '@/common/styles/theme';
import Card from './components/Card';
import { Card as CardType } from '@/types/card.type';
import AddCardSection from './components/AddCardSection';
import OutsideAddCard from './components/OutsideAddCard';

type ListCardsViewProps = {
  cards: CardType[];
  columnId: string;
  isAddingMode: boolean;
  onAddingMode: () => void;
  onCancelAddingMode: () => void;
};

function ListCardsView({ cards, columnId, isAddingMode, onAddingMode, onCancelAddingMode }: ListCardsViewProps) {
  const theme = useCustomTheme();
  const filter = useAppSelector(selectBoardFilter);
  const canViewAddCardBtn = !isAddingMode && isEmpty(filter);

  return (
    <SortableContext items={cards?.map((card) => card._id)} strategy={verticalListSortingStrategy}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
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
        {isAddingMode && <AddCardSection columnId={columnId} onHideTextField={onCancelAddingMode} />}
      </Box>
      {canViewAddCardBtn && (
        <Box sx={{ px: 1, pt: 1 }}>
          <OutsideAddCard onShowTextField={onAddingMode} />
        </Box>
      )}
    </SortableContext>
  );
}

export default ListCardsView;
