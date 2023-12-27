import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Modal from '@/components/Modal';
import List from './components/List';
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
  const [isVisibleInviteModal, setIsVisibleInviteModal] = useState(false);
  const [isVisibleListModal, setIsVisibleListModal] = useState(false);

  const handleInviteModalVisibility = () => {
    setIsVisibleInviteModal(!isVisibleInviteModal);
  };

  const handleListModalVisibility = () => {
    setIsVisibleListModal(!isVisibleListModal);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{ cursor: 'pointer' }}
          onClick={handleListModalVisibility}
        >
          <PeopleAltOutlinedIcon fontSize="small" />
          <span>Members</span>
        </Stack>
        <IconButton onClick={handleInviteModalVisibility}>
          <AddOutlinedIcon />
        </IconButton>
      </Stack>
      <Modal
        isVisibleModal={isVisibleInviteModal}
        onClose={handleInviteModalVisibility}
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
            onClick={() => onInvite(handleInviteModalVisibility)}
          >
            Invite
          </Button>
        </Stack>
      </Modal>
      <Modal
        isVisibleModal={isVisibleListModal}
        sx={{
          transform: 'translate(-50%, -250px)',
          width: { xs: '95%', md: '600px' },
          bgcolor: 'background.paper',
          border: (theme) => (theme.palette.mode === 'dark' ? '1px solid #716e6e' : 'unset'),
        }}
        onClose={handleListModalVisibility}
      >
        <List />
      </Modal>
    </>
  );
}

export default MembersView;
