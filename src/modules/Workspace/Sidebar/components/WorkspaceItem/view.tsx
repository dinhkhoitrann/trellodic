import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function WorkspaceItemView() {
  return (
    <Button
      fullWidth
      sx={{ justifyContent: 'left', alignItems: 'center', textAlign: 'left', mb: 1 }}
      startIcon={
        <Box
          sx={{
            width: '30px',
            height: '30px',
            bgcolor: '#4bce97',
            borderRadius: '4px',
            color: 'black',
            textAlign: 'center',
            mx: 1,
          }}
        >
          T
        </Box>
      }
    >
      Tran Dinh Khoi&apos;s workspace
    </Button>
  );
}

export default WorkspaceItemView;
