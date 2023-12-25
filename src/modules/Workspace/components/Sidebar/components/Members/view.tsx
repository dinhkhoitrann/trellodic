import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Modal from '@/components/Modal';
import { UserOption } from './type';

type MembersViewProps = {
  options: UserOption[];
  selectedUsers: UserOption[];
  isSearching: boolean;
  isInviting: boolean;
  onQueryChange: (_query: string) => void;
  onSelectUsers: (_skills: UserOption[]) => void;
  onInvite: (_onSuccess: () => void) => void;
};

function MembersView({
  options,
  selectedUsers,
  isSearching,
  isInviting,
  onSelectUsers,
  onQueryChange,
  onInvite,
}: MembersViewProps) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleModalVisibility = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <>
      <Button fullWidth sx={{ justifyContent: 'space-between', height: 40, px: 2 }} onClick={handleModalVisibility}>
        <Stack direction="row" alignItems="center" spacing={2}>
          <PeopleAltOutlinedIcon fontSize="small" />
          <span>Members</span>
        </Stack>
        <AddOutlinedIcon />
      </Button>
      <Modal
        isVisibleModal={isVisibleModal}
        onClose={handleModalVisibility}
        sx={{
          transform: 'translate(-50%, -250px)',
          width: { xs: '95%', md: '550px' },
          bgcolor: 'background.paper',
          border: (theme) => (theme.palette.mode === 'dark' ? '1px solid #716e6e' : 'unset'),
        }}
      >
        <Stack alignItems="center">
          <PersonAddOutlinedIcon fontSize="large" />
          <Typography sx={{ mt: 2, mb: 4 }}>Add users to this workspace</Typography>
          <Autocomplete
            multiple
            fullWidth
            value={selectedUsers}
            options={options}
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(option, value) => option._id === value._id}
            filterSelectedOptions
            filterOptions={(x) => x}
            loading={isSearching}
            onChange={(e, value) => onSelectUsers(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select users"
                placeholder="Search users by email address"
                onChange={(e) => onQueryChange(e.target.value)}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isSearching && <CircularProgress color="inherit" size={20} />}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            disabled={selectedUsers.length === 0 || isInviting}
            onClick={() => onInvite(handleModalVisibility)}
          >
            Invite
          </Button>
        </Stack>
      </Modal>
    </>
  );
}

export default MembersView;
