import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Column from './Column';

type ListColumnsViewProps = {
  columns: any;
};

function ListColumnsView({ columns }: ListColumnsViewProps) {
  return (
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
      {columns?.map((column: any) => (
        <Column key={column._id} column={column} />
      ))}

      <Box
        sx={{
          minWidth: '180px',
          maxWidth: '180px',
          mx: 2,
          borderRadius: '6px',
          height: 'fit-content',
          bgcolor: '#ffffff3d',
        }}
      >
        <Button startIcon={<AddIcon />} sx={{ color: 'white', width: '100%' }}>
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumnsView;
