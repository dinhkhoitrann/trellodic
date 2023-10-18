import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type WorkspaceItemViewProps = {
  name: string;
  onGetWorkspace: () => void;
};

function WorkspaceItemView({ name, onGetWorkspace }: WorkspaceItemViewProps) {
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
      onClick={onGetWorkspace}
    >
      {name}&apos;s workspace
    </Button>
  );
}

export default WorkspaceItemView;
