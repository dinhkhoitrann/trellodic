import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { isEmpty } from 'lodash';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Menu, MenuItem, Tooltip, ListItem } from '@/components/UIElements';
import { useAppSelector } from '@/redux/store';
import { selectBoardFilter } from '@/redux/slices/board';
import { useCustomTheme } from '@/common/styles/theme';
import { Column } from '@/types/column.type';
import { useAlert, useAuthorized } from '@/hooks';
import { DND_ANIMATION_OPACITY } from '@/utils/constants';
import ListCards from './components/ListCards';
import ColumnTitle from './components/Title';

type ColumnViewProps = {
  column: Column;
  anchorEl: SVGSVGElement | null;
  onClick: React.ComponentProps<'svg'>['onClick'];
  onClose: () => void;
  onDelete: (_params: string[]) => void;
};

function ColumnView({ column, anchorEl, onClick, onClose, onDelete }: ColumnViewProps) {
  const theme = useCustomTheme();
  const open = !!anchorEl;

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: { ...column },
  });
  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? DND_ANIMATION_OPACITY : undefined,
  };

  const { handleOpenAlert, renderAlert } = useAlert({
    okText: 'Delete',
    title: 'Delete column?',
    content: 'Are you sure? You can not get it back',
    onOk: (params) => {
      onClose();
      onDelete(params);
    },
  });

  const { isBoardAdmin } = useAuthorized();
  const filter = useAppSelector(selectBoardFilter);
  const canDelete = column.cards?.length === 1 && column.cards?.[0]?.FE_isPlaceholderCard;
  const canViewColumnOptions = isBoardAdmin && isEmpty(filter);

  return (
    <>
      <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
        <Box
          {...listeners}
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2,
            px: '10px',
            pb: 1,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: `calc(${theme.customProps.boardContentHeight} - 40px)`,
          }}
        >
          <Box
            sx={{
              height: theme.customProps.columnHeaderHeight,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <ColumnTitle columnId={column._id} title={column.title} />
            {canViewColumnOptions && (
              <Box>
                <Tooltip title="More options">
                  <ExpandMoreIcon sx={{ color: 'text.primary', cursor: 'pointer' }} onClick={onClick} />
                </Tooltip>
                <Menu anchorEl={anchorEl} open={open} onClose={onClose}>
                  <Tooltip title={!canDelete && 'You can not delete the column containing cards'} arrow placement="top">
                    <div>
                      <MenuItem disabled={!canDelete} onClick={() => handleOpenAlert(column._id)}>
                        <ListItem.Icon>
                          <DeleteIcon fontSize="small" />
                        </ListItem.Icon>
                        <ListItem.Text>Delete column</ListItem.Text>
                      </MenuItem>
                    </div>
                  </Tooltip>
                </Menu>
              </Box>
            )}
          </Box>

          <ListCards cards={column?.cards} columnId={column._id} cardOrderIds={column?.orderedCardIds} />
        </Box>
      </div>
      {renderAlert()}
    </>
  );
}

export default ColumnView;
