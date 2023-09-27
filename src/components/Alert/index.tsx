import { ReactNode } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

type AlertProps = {
  title?: string;
  content?: ReactNode;
  isOpen: boolean;
  okText?: string;
  cancelText?: string;
  onOk: () => void;
  onClose: () => void;
};

function Alert({ title, content, isOpen, okText, cancelText, onOk, onClose }: AlertProps) {
  const handleOk = () => {
    onOk();
    onClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description" sx={{ minWidth: '350px' }}>
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          {cancelText || 'Cancel'}
        </Button>
        <Button variant="contained" onClick={handleOk} autoFocus>
          {okText || 'Agree'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Alert;
