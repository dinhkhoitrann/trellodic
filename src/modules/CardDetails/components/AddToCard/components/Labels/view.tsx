import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ActionButton, { ActionButtonRef } from '@/common/components/ActionButton';
import PopoverWrapper from '../Popover';
import SelectLabels from './components/SelectLabels';
import CreateLabel from './components/CreateLabel';

const MODES = {
  VIEW: 'view',
  CREATE: 'create',
  EDIT: 'edit',
};

function LabelsView() {
  const [mode, setMode] = useState(MODES.VIEW);
  const ref = useRef<ActionButtonRef>(null);

  const content = {
    [MODES.VIEW]: {
      title: 'Labels',
      component: <SelectLabels />,
    },
    [MODES.CREATE]: {
      title: 'Create label',
      component: <CreateLabel />,
    },
  };

  const handleClose = () => {
    ref.current?.handleClose();
  };

  const handleCreateMode = () => {
    setMode(MODES.CREATE);
  };

  const handleBackToViewMode = () => {
    setMode(MODES.VIEW);
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<LabelOutlinedIcon />}
      popoverContent={
        <PopoverWrapper
          title={content[mode].title}
          canGoBack={mode !== MODES.VIEW}
          onClose={handleClose}
          onGoBack={handleBackToViewMode}
        >
          {content[mode].component}
          {mode === MODES.VIEW ? (
            <Button sx={{ display: 'block', margin: '0 auto' }} onClick={handleCreateMode}>
              Create a new label
            </Button>
          ) : (
            <></>
          )}
        </PopoverWrapper>
      }
    >
      Labels
    </ActionButton>
  );
}

export default LabelsView;
