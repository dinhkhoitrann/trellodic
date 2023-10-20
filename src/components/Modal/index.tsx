import { ReactElement } from 'react';
import { Backdrop, Fade, Modal as MUIModal } from '@mui/material';

type ModalProps = {
  children: ReactElement;
  isVisibleModal: boolean;
  onClose: () => void;
};

export const CUSTOM_STYLES_MODAL = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  boxShadow: 24,
  borderRadius: '6px',
  px: { xs: 4, md: 5 },
  py: 4,
};

function Modal({ children, isVisibleModal, onClose }: ModalProps) {
  return (
    <MUIModal
      open={isVisibleModal}
      onClose={onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
      style={{ overflow: 'auto' }}
    >
      <div>
        <Fade in>{children}</Fade>
      </div>
    </MUIModal>
  );
}

export default Modal;
