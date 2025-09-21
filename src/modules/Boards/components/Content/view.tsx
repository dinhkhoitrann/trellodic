import { useSearchParams } from 'next/navigation';
import {
  CollisionDetection,
  DndContext,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  DropAnimation,
  SensorDescriptor,
  defaultDropAnimationSideEffects,
} from '@dnd-kit/core';
import { isEmpty } from 'lodash';
import { Box, Typography } from '@/components/UIElements';
import { useCustomTheme } from '@/common/styles/theme';
import React, { Suspense } from 'react';
import SummaryTodos from '@/modules/Summary';
import { DND_ANIMATION_OPACITY } from '@/utils/constants';
import { selectBoardFilter, selectBoardLoading } from '@/redux/slices/board';
import { useAppSelector } from '@/redux/store';
import BackdropLoading from '@/components/Loading/Backdrop';
import { Column as ColumnType } from '@/types/column.type';
import Alert from './components/Alert';
import ListColumns from './components/ListColumns';
import Column from './components/ListColumns/components/Column';
import Card from './components/ListColumns/components/Column/components/ListCards/components/Card';
import { ACTIVE_DRAG_ITEM_TYPE } from './constants';

const CardDetails = React.lazy(() => import('@/modules/CardDetails'));

type BoardContentViewProps = {
  columns: ColumnType[];
  activeDragItemType: string | null;
  activeDragItemData: any | null;
  sensors: SensorDescriptor<any>[] | undefined;
  collisionDetection: CollisionDetection | undefined;
  onDragStart: (_event: DragStartEvent) => void;
  onDragOver: (_event: DragOverEvent) => void;
  onDragEnd: (_event: DragEndEvent) => void;
};

function BoardContentView({ columns, activeDragItemType, activeDragItemData, ...rest }: BoardContentViewProps) {
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');
  const loading = useAppSelector(selectBoardLoading);
  const filter = useAppSelector(selectBoardFilter);

  const customTheme = useCustomTheme();
  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: DND_ANIMATION_OPACITY,
        },
      },
    }),
  };

  const content = (
    <>
      <BackdropLoading open={loading} />
      <Box
        sx={{
          width: '100%',
          height: customTheme.customProps.boardContentHeight,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? customTheme.colors.bgDark : customTheme.colors.bgBlueLight,
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
          <ListColumns columns={columns || []} />
          <DragOverlay dropAnimation={dropAnimation}>
            {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && <Column column={activeDragItemData} />}
            {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && <Card card={activeDragItemData} />}
          </DragOverlay>
        </Box>
        <SummaryTodos />
      </Box>
      {cardId && (
        <Suspense fallback={<Typography>Loading card details...</Typography>}>
          <CardDetails cardId={cardId} />
        </Suspense>
      )}
    </>
  );

  if (!isEmpty(filter))
    return (
      <>
        {content}
        <Alert />
      </>
    );
  return <DndContext {...rest}>{content}</DndContext>;
}

export default BoardContentView;
