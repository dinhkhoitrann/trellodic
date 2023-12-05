import { useRef, useState } from 'react';
import { isEqual } from 'lodash';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { User } from '@/types/user.type';
import Recommendations from './components/Recommendations';
import PopoverWrapper from '../Popover';

type MembersViewProps = BoardGlobalProps & {
  isSaving: boolean;
  onAddMember: (_memberIds: string[]) => void;
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function MembersView({ card: { memberIds = [] }, isSaving, onAddMember }: MembersViewProps) {
  const [isModified, setIsModified] = useState(false);
  const buttonRef = useRef<ActionButtonRef>(null);
  const selectedMembersRef = useRef<User[]>(memberIds);
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
    members?: User[];
    selectedRecommendationIds?: string[];
  }) => {
    if (members) {
      selectedMembersRef.current = [...members];
    }

    if (selectedRecommendationIds) {
      selectedRecommendationIdsRef.current = [...selectedRecommendationIds];
    }

    const isChanged =
      !isEqual(selectedMembersRef.current, memberIds) ||
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
          <Autocomplete
            multiple
            size="small"
            options={memberIds}
            disableCloseOnSelect
            defaultValue={memberIds}
            getOptionLabel={(option) => option.name}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                {option.name}
              </li>
            )}
            style={{ width: '100%', marginTop: 20 }}
            renderInput={(params) => <TextField {...params} label="Add members" placeholder="Members" />}
            onChange={(_event, selectedValues, _reason, _details) => {
              handleChangeMembers({ members: selectedValues });
            }}
          />
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

export default withBoard(MembersView);
