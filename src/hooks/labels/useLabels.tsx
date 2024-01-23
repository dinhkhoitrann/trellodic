import { useRef, useState } from 'react';
import { Button } from '@/components/UIElements';
import SelectLabels from '@/components/_shared/Labels/components/SelectLabels';
import EditLabel from '@/components/_shared/Labels/components/EditLabel';
import CreateLabel from '@/components/_shared/Labels/components/CreateLabel';
import { useAuthorized } from '@/hooks';
import { Label } from '@/types/board.type';
import { MODES } from '@/utils/constants';

export default function useLabels() {
  const [mode, setMode] = useState(MODES.VIEW);
  const labelRef = useRef<Label>();
  const { isBoardAdmin } = useAuthorized();
  const canCreate = mode === MODES.VIEW && isBoardAdmin;

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

  const render = () => {
    return (
      <>
        {content[mode].component}
        {canCreate && (
          <Button sx={{ display: 'block', margin: '0 auto' }} onClick={handleCreateMode}>
            Create a new label
          </Button>
        )}
      </>
    );
  };

  return {
    mode,
    title: content[mode].title,
    render,
    onBackToViewMode: handleBackToViewMode,
  };
}
