import { useRef } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import PopoverWrapper from '../Popover';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { User } from '@/types/user.type';

type MembersViewProps = BoardGlobalProps & {
  isSaving: boolean;
  onAddMember: (_members: User[]) => void;
};

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function MembersView({ card, isSaving, onAddMember }: MembersViewProps) {
  const ref = useRef<ActionButtonRef>(null);
  const selectedMembers = useRef<User[]>(card.memberIds || []);

  const handleClose = () => {
    ref.current?.handleClose();
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<PersonOutlineOutlinedIcon />}
      popoverContent={
        <PopoverWrapper title="Members" onClose={handleClose}>
          <Autocomplete
            multiple
            size="small"
            options={card.memberIds || []}
            disableCloseOnSelect
            defaultValue={card.memberIds}
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
              selectedMembers.current = [...selectedValues];
            }}
          />
          <Button
            variant="contained"
            disabled={isSaving}
            sx={{ mt: 2 }}
            onClick={() => onAddMember(selectedMembers.current || card.memberIds)}
          >
            {isSaving ? 'Saving' : 'Save'}
          </Button>
        </PopoverWrapper>
      }
    >
      Members
    </ActionButton>
  );
}

export default withBoard(MembersView);
