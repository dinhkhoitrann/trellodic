import { useState } from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Modal, { CUSTOM_STYLES_MODAL } from '@/components/Modal';
import { Theme } from '@/common/enums';
import SummaryModal from './components/Modal';

function SummaryTodos() {
  const [showModal, setShowModal] = useState(false);

  const handleVisibilityModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        sx={{ position: 'fixed', bottom: 40, right: 24 }}
        onClick={handleVisibilityModal}
      >
        <SummarizeIcon sx={{ mr: 1 }} />
        Summary
      </Fab>
      <Modal isVisibleModal={showModal} onClose={handleVisibilityModal}>
        <Box
          sx={{
            ...CUSTOM_STYLES_MODAL,
            width: { xs: '95%', md: '60%' },
            transform: 'translate(-50%, -250px)',
            bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#333643' : '#ebecf0'),
            color: (theme) => (theme.palette.mode === Theme.Light ? '#172b4d' : '#B6C2CF'),
          }}
        >
          <SummaryModal />
        </Box>
      </Modal>
    </>
  );
}

export default SummaryTodos;
