import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';

type FormViewProps = {
  isOpen: boolean;
  onClose: () => void;
};

function FormView(props: FormViewProps) {
  return (
    <Drawer anchor="right" {...props}>
      <Box
        sx={{
          width: { xs: '100vw', sm: '20rem' },
          maxHeight: '100vh',
          p: 3,
          position: 'relative',
          height: '100vh',
        }}
      >
        111
      </Box>
    </Drawer>
  );
}

export default FormView;
