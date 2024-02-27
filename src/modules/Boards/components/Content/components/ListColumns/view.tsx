import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import AddIcon from '@mui/icons-material/Add';
import { Box, Button } from '@/components/UIElements';
import Column from './components/Column';
import { Column as ColumnType } from '@/types/column.type';
import AddColumnSection from './components/AddColumnSection';

type ListColumnsViewProps = {
  columns: ColumnType[];
  isAddingMode: boolean;
  onAddingMode: () => void;
  onCancelAddingMode: () => void;
};

function ListColumnsView({ columns, isAddingMode, onAddingMode, onCancelAddingMode }: ListColumnsViewProps) {
  return (
    <SortableContext items={columns?.map((column) => column._id)} strategy={horizontalListSortingStrategy}>
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
        {columns?.map((column) => (
          <Column key={column._id} column={column} />
        ))}

        <Box
          sx={{
            minWidth: '270px',
            maxWidth: '270px',
            mx: 2,
            borderRadius: '6px',
            height: 'fit-content',
            bgcolor: '#ffffff3d',
          }}
        >
          {isAddingMode ? (
            <AddColumnSection onCancelAddingMode={onCancelAddingMode} />
          ) : (
            <Button
              startIcon={<AddIcon />}
              sx={{ color: 'white', width: '100%', height: '100%', justifyContent: 'left', p: '14px' }}
              onClick={onAddingMode}
            >
              Add new column
            </Button>
          )}
        </Box>
      </Box>
    </SortableContext>
  );
}

export default ListColumnsView;
