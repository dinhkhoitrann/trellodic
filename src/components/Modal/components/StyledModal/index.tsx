import Modal, { ModalProps } from '../..';

function StyledModal({ children, sx, ...rest }: ModalProps) {
  return (
    <Modal
      {...rest}
      sx={{
        transform: 'translate(-50%, -250px)',
        width: { xs: '95%', md: '500px' },
        bgcolor: 'background.paper',
        border: (theme) => (theme.palette.mode === 'dark' ? '1px solid #716e6e' : 'unset'),
      }}
    >
      {children}
    </Modal>
  );
}

export default StyledModal;
