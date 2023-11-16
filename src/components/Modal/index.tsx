import React from 'react';
import { Backdrop, Box, Fade, Modal as MUIModal, SxProps, Theme } from '@mui/material';

type ModalProps = {
  children: React.ReactNode;
  isVisibleModal: boolean;
  sx?: SxProps<Theme> | undefined;
  onClose: () => void;
};

function Modal({ children, isVisibleModal, sx, onClose }: ModalProps) {
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
        <Fade in>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              boxShadow: 24,
              borderRadius: '6px',
              px: { xs: 4, md: 5 },
              py: 4,
              ...sx,
            }}
          >
            {children}
          </Box>
        </Fade>
      </div>
    </MUIModal>
  );
}

export default Modal;
