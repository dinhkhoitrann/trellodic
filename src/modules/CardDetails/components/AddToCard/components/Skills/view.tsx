import { useEffect, useRef } from 'react';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import { Box } from '@/components/UIElements';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import UpdateSkills from '@/components/_shared/Skills';
import { useAppSelector } from '@/redux/store';
import { selectCardDetails } from '@/redux/slices/card';
import PopoverWrapper from '../Popover';

type SkillsViewProps = {
  isUpdating: boolean;
  isSuccess: boolean;
  onUpdateSkills: (_skills: string[]) => void;
};

function SkillsView({ isUpdating, isSuccess, onUpdateSkills }: SkillsViewProps) {
  const ref = useRef<ActionButtonRef>(null);
  const card = useAppSelector(selectCardDetails);
  const skills = card?.skills || [];

  useEffect(() => {
    if (isSuccess) handleClose();
  }, [isSuccess]);

  const handleClose = () => {
    ref.current?.handleClose();
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<BuildOutlinedIcon />}
      renderPopover={() => (
        <PopoverWrapper title="Add skills" onClose={handleClose}>
          <Box sx={{ mt: 2 }}>
            <UpdateSkills defaultSkills={skills} state={{ isUpdating, isSuccess }} onSaveSkills={onUpdateSkills} />
          </Box>
        </PopoverWrapper>
      )}
    >
      Skills
    </ActionButton>
  );
}

export default SkillsView;
