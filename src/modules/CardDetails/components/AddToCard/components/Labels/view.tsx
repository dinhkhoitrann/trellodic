import { useRef } from 'react';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import { MODES } from '@/utils/constants';
import { useLabels } from '@/hooks';
import PopoverWrapper from '../Popover';

function LabelsView() {
  const { mode, title, render, onBackToViewMode } = useLabels();
  const ref = useRef<ActionButtonRef>(null);

  const handleClose = () => {
    ref.current?.handleClose();
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<LabelOutlinedIcon />}
      renderPopover={() => (
        <PopoverWrapper title={title} canGoBack={mode !== MODES.VIEW} onClose={handleClose} onGoBack={onBackToViewMode}>
          {render()}
        </PopoverWrapper>
      )}
    >
      Labels
    </ActionButton>
  );
}

export default LabelsView;
