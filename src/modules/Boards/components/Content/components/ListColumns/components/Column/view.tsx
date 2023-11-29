import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useTheme } from '@mui/styles';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CustomThemeOptions } from '@/common/styles/theme';
import { Theme } from '@/common/enums';
import { Column } from '@/types/column.type';
import { useAlert } from '@/hooks';
import ListCards from './components/ListCards';
import ColumnTitle from './components/Title';

type ColumnViewProps = {
  column: Column;
  anchorEl: SVGSVGElement | null;
  onClick: (_event: React.MouseEvent<SVGSVGElement>) => void;
  onClose: () => void;
  onDelete: (_params: string[]) => void;
};

function ColumnView({ column, anchorEl, onClick, onClose, onDelete }: ColumnViewProps) {
  const theme = useTheme<CustomThemeOptions>();
  const open = Boolean(anchorEl);

  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: column._id,
    data: { ...column },
  });
  const dndKitColumnStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: '100%',
    opacity: isDragging ? 0.5 : undefined,
  };

  const { handleOpenAlert, renderAlert } = useAlert({
    okText: 'Delete',
    title: 'Delete column?',
    content: 'Are you sure? All cards in this column will be deleted',
    onOk(params) {
      onClose();
      onDelete(params);
    },
  });

  return (
    <>
      <div ref={setNodeRef} style={dndKitColumnStyles} {...attributes}>
        <Box
          {...listeners}
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#333643' : '#ebecf0'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: `calc(${theme.customProps.boardContentHeight} - 40px)`,
          }}
        >
          <Box
            sx={{
              height: theme.customProps.columnHeaderHeight,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <ColumnTitle columnId={column._id} title={column.title} />
            <Box>
              <Tooltip title="More options">
                <ExpandMoreIcon
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                  onClick={onClick}
                />
              </Tooltip>
              <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={onClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown',
                }}
              >
                <MenuItem onClick={() => handleOpenAlert(column._id)}>
                  <ListItemIcon>
                    <DeleteIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Delete column</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>

          <ListCards cards={column?.cards} columnId={column._id} cardOrderIds={column?.cardOrderIds} />
        </Box>
      </div>
      {renderAlert()}
    </>
  );
}

export default ColumnView;
