import { useRef, useState } from 'react';
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import Recommendations from './components/Recommendations';
import SelectMembers from './components/SelectMembers';
import PopoverWrapper from '../Popover';
import { UserOption } from './type';

type MembersViewProps = {
  isSaving: boolean;
  onAddMember: (_userIds: string[]) => void;
};

function MembersView({ isSaving, onAddMember }: MembersViewProps) {
  const [isModified, setIsModified] = useState(false);
  const buttonRef = useRef<ActionButtonRef>(null);
  const selectedMembersRef = useRef<UserOption[]>([]);
  const selectedRecommendationIdsRef = useRef<string[]>([]);

  const handleClose = () => {
    buttonRef.current?.handleClose();
  };

  const handleAddMember = () => {
    handleClose();
    const memberIds = [...selectedMembersRef.current.map((mem) => mem._id), ...selectedRecommendationIdsRef.current];
    onAddMember(memberIds);
  };

  const handleChangeMembers = ({
    members,
    selectedRecommendationIds,
  }: {
    members?: UserOption[];
    selectedRecommendationIds?: string[];
  }) => {
    if (members) {
      selectedMembersRef.current = [...members];
    }

    if (selectedRecommendationIds) {
      selectedRecommendationIdsRef.current = [...selectedRecommendationIds];
    }

    const isChanged =
      selectedMembersRef.current.length > 0 ||
      (selectedRecommendationIds !== undefined && selectedRecommendationIds.length > 0);
    if (isChanged !== isModified) {
      setIsModified(isChanged);
    }
  };

  return (
    <ActionButton
      ref={buttonRef}
      startIcon={<PersonOutlineOutlinedIcon />}
      renderPopover={() => (
        <PopoverWrapper title="Members" onClose={handleClose}>
          <SelectMembers onChangeMembers={handleChangeMembers} />
          <Recommendations onSelectRecommendations={handleChangeMembers} />
          <Button variant="contained" disabled={isSaving || !isModified} sx={{ mt: 2 }} onClick={handleAddMember}>
            {isSaving ? 'Saving' : 'Save'}
          </Button>
        </PopoverWrapper>
      )}
    >
      Members
    </ActionButton>
  );
}

export default MembersView;
