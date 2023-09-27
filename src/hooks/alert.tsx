import { useState, useRef, ReactNode } from 'react';
import Alert from '@/components/Alert';

type AlertProps = {
  title?: string;
  content?: ReactNode;
  okText?: string;
  cancelText?: string;
  onOk: (..._rest: any[]) => void;
};

export default function useAlert({ title, content, okText, cancelText, onOk }: AlertProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<any[]>();

  const handleClickOpen = (...args: any[]) => {
    setOpen(true);
    ref.current = args;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const renderAlert = () => {
    return (
      <Alert
        title={title}
        content={content}
        isOpen={open}
        okText={okText}
        cancelText={cancelText}
        onClose={handleClose}
        onOk={() => onOk(ref.current)}
      />
    );
  };

  return {
    renderAlert,
    handleOpenAlert: handleClickOpen,
  };
}
