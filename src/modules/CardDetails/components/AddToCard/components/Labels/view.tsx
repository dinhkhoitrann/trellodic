import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ActionButton, { ActionButtonRef } from '@/common/components/ActionButton';
import PopoverWrapper from '../Popover';
import SelectLabels from './components/SelectLabels';
import CreateLabel from './components/CreateLabel';
import { MODES } from './constants';
import EditLabel from './components/EditLabel';
import { Label } from '@/types/board.type';

function LabelsView() {
  const [mode, setMode] = useState(MODES.VIEW);
  const ref = useRef<ActionButtonRef>(null);
  const labelRef = useRef<Label>();

  const handleClose = () => {
    ref.current?.handleClose();
  };

  const handleCreateMode = () => {
    setMode(MODES.CREATE);
  };

  const handleEditMode = (label: Label) => {
    labelRef.current = label;
    setMode(MODES.EDIT);
  };

  const handleBackToViewMode = () => {
    setMode(MODES.VIEW);
  };

  const content = {
    [MODES.VIEW]: {
      title: 'Labels',
      component: <SelectLabels onEditMode={handleEditMode} />,
    },
    [MODES.CREATE]: {
      title: 'Create label',
      component: <CreateLabel onCreateSuccess={handleBackToViewMode} />,
    },
    [MODES.EDIT]: {
      title: 'Edit label',
      component: <EditLabel label={labelRef.current} onEditSuccess={handleBackToViewMode} />,
    },
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
