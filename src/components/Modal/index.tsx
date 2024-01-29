import React, { PropsWithChildren } from 'react';
import { SxProps, Theme } from '@mui/material';
import { Backdrop, Box, Fade, Modal as MUIModal } from '@/components/UIElements';

export type ModalProps = {
  isVisibleModal: boolean;
  sx?: SxProps<Theme> | undefined;
  onClose: () => void;
};

function Modal({ children, isVisibleModal, sx, onClose }: PropsWithChildren<ModalProps>) {
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
