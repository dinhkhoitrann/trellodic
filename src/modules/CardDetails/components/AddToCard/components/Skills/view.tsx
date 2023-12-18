import { useRef } from 'react';
import Box from '@mui/material/Box';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import PopoverWrapper from '../Popover';
import AddSkills from '@/components/Skills';
import { addSkillsToCard } from '@/services/skills';

function SkillsView() {
  const ref = useRef<ActionButtonRef>(null);

  const handleClose = () => {
    ref.current?.handleClose();
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<ChecklistIcon />}
      renderPopover={() => (
        <PopoverWrapper title="Add skills" onClose={handleClose}>
          <Box sx={{ mt: 2 }}>
            <AddSkills onSaveSkills={addSkillsToCard} onSuccess={handleClose} />
          </Box>
        </PopoverWrapper>
      )}
    >
      Skills
    </ActionButton>
  );
}

export default SkillsView;
