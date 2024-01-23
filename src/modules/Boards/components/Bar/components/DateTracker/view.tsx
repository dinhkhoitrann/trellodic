import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import InsightsIcon from '@mui/icons-material/Insights';
import Modal from '@/components/Modal';
import GanntChart from './components/GanntChart';

function DateTrackerView() {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleModalVisibility = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <>
      <Tooltip title="Date tracker">
        <InsightsIcon
          sx={{ cursor: 'pointer', color: (theme) => (theme.palette.mode === 'light' ? 'white' : '') }}
          onClick={handleModalVisibility}
        />
      </Tooltip>
      <Modal
        isVisibleModal={isVisibleModal}
        onClose={handleModalVisibility}
        sx={{
          transform: 'translate(-50%, -250px)',
          width: { xs: '95%', md: '60%' },
          bgcolor: 'background.paper',
          border: (theme) => (theme.palette.mode === 'dark' ? '1px solid #716e6e' : 'unset'),
        }}
      >
        <GanntChart />
      </Modal>
    </>
  );
}

export default DateTrackerView;
