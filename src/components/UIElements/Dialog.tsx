import MUIDialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Dialog(props: DialogProps) {
  return <MUIDialog {...props} />;
}

Dialog.Actions = DialogActions;
Dialog.Content = DialogContent;
Dialog.ContentText = DialogContentText;
Dialog.Title = DialogTitle;

export default Dialog;
