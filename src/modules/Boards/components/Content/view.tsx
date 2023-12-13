import { useSearchParams } from 'next/navigation';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import { DragOverlay, DropAnimation, defaultDropAnimationSideEffects } from '@dnd-kit/core';
import { Board } from '@/types/board.type';
import { CustomThemeOptions } from '@/common/styles/theme';
import CardDetails from '@/modules/CardDetails';
import SummaryTodos from '@/modules/Summary';
import { DND_ANIMATION_OPACITY } from '@/utils/constants';
import { selectBoardLoading } from '@/redux/slices/board';
import { useAppSelector } from '@/redux/store';
import BackdropLoading from '@/components/Loading/Backdrop';
import ListColumns from './components/ListColumns';
import Column from './components/ListColumns/components/Column';
import Card from './components/ListColumns/components/Column/components/ListCards/components/Card';
import { ACTIVE_DRAG_ITEM_TYPE } from './constants';

type BoardContentViewProps = {
  board: Board;
  activeDragItemType: string | null;
  activeDragItemData: any | null;
};

function BoardContentView({ board, activeDragItemType, activeDragItemData }: BoardContentViewProps) {
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');
  const loading = useAppSelector(selectBoardLoading);

  const theme = useTheme<CustomThemeOptions>();
  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: DND_ANIMATION_OPACITY,
        },
      },
    }),
  };

  return (
    <>
      <BackdropLoading open={loading} />
      <Box
        sx={{
          width: '100%',
          height: theme.customProps.boardContentHeight,
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#24272b' : '#1976d2'),
          p: '10px 0',
        }}
      >
        <Box
          sx={{
            bgcolor: 'inherit',
            width: '100%',
            height: '100%',
            display: 'flex',
            overflowX: 'auto',
            overflowY: 'hidden',
            '&::-webkit-scrollbar-track': {
              m: 2,
            },
          }}
        >
          <ListColumns columns={board?.columns} />
          <DragOverlay dropAnimation={dropAnimation}>
            {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && <Column column={activeDragItemData} />}
            {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && <Card card={activeDragItemData} />}
          </DragOverlay>
        </Box>
        <SummaryTodos />
      </Box>
      {cardId && <CardDetails cardId={cardId} />}
    </>
  );
}

export default BoardContentView;
