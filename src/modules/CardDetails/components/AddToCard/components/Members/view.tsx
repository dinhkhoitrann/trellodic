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

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const members = [
  { name: 'The boy 1', from: 'Current workspace' },
  { name: 'The boy 2', from: 'Current workspace' },
  { name: 'The boy 3', from: 'Current workspace' },
  { name: 'The boy 4', from: 'Current workspace' },
  { name: 'The boy 5', from: 'Current workspace' },
  { name: 'The boy 6', from: 'Different workspaces' },
];

function MembersView() {
  const ref = useRef<ActionButtonRef>(null);

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
            options={members}
            disableCloseOnSelect
            getOptionLabel={(option) => option.name}
            groupBy={(option) => option.from}
            renderOption={(props, option, { selected }) => (
              <li {...props}>
                <Checkbox icon={icon} checkedIcon={checkedIcon} style={{ marginRight: 8 }} checked={selected} />
                {option.name}
              </li>
            )}
            style={{ width: '100%', marginTop: 20 }}
            renderInput={(params) => <TextField {...params} label="Add members" placeholder="Members" />}
            onChange={(event, newInputValue, reason, details) => {
              console.log(details);
            }}
          />
          <Button variant="contained" sx={{ mt: 2 }}>
            Save
          </Button>
        </PopoverWrapper>
      }
    >
      Members
    </ActionButton>
  );
}

export default MembersView;
