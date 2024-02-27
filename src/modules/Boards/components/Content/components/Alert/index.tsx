import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Snackbar } from '@/components/UIElements';

function Alert() {
  const [open, setOpen] = useState(true);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <IconButton size="small" onClick={handleClose}>
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="You can not change columns and cards order in filter mode"
      action={action}
    />
  );
}

export default Alert;
