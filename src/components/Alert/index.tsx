import { ReactNode } from 'react';
import { Button, Dialog } from '@/components/UIElements';

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
    <Dialog open={isOpen} onClose={onClose}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Content>
        <Dialog.ContentText sx={{ minWidth: '350px' }}>{content}</Dialog.ContentText>
      </Dialog.Content>
      <Dialog.Actions>
        <Button variant="outlined" onClick={onClose}>
          {cancelText || 'Cancel'}
        </Button>
        <Button variant="contained" onClick={handleOk} autoFocus>
          {okText || 'Agree'}
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
}

export default Alert;
