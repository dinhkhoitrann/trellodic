import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import { DragOverlay, DropAnimation, defaultDropAnimationSideEffects } from '@dnd-kit/core';
import ListColumns from './components/ListColumns';
import Column from './components/ListColumns/components/Column';
import Card from './components/ListColumns/components/Column/components/ListCards/components/Card';
import { Board } from '@/types/board.type';
import { Theme } from '@/common/enums';
import { CustomThemeOptions } from '@/common/styles/theme';
import { ACTIVE_DRAG_ITEM_TYPE } from './constants';
import CardDetails from '@/modules/CardDetails';
import withBoard from '@/hocs/withBoard';

type BoardContentViewProps = {
  board: Board;
  cardId?: string;
  activeDragItemType: string | null;
  activeDragItemData: any | null;
};

function BoardContentView({ board, cardId, activeDragItemType, activeDragItemData }: BoardContentViewProps) {
  const theme = useTheme<CustomThemeOptions>();
  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5',
        },
      },
    }),
  };

  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: theme.customProps.boardContentHeight,
          bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#34495e' : '#1976d2'),
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
      </Box>
      {cardId && <CardDetails cardId={cardId} />}
    </>
  );
}

export default withBoard(BoardContentView);
