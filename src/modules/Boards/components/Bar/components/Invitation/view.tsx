import { forwardRef, useImperativeHandle, useState } from 'react';
import { useColorScheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Modal from '@/components/Modal';
import { MemberOption } from './type';

type InvitationViewProps = {
  members: MemberOption[];
  isFetching: boolean;
  isInviting: boolean;
  onInvite: (_members: MemberOption[]) => void;
};

export type InvitationViewRef = {
  onClose: () => void;
  clearSelections: () => void;
};

export default forwardRef<InvitationViewRef, InvitationViewProps>(function InvitationView(
  { members, isFetching, isInviting, onInvite },
  ref,
) {
  const [selectedMembers, setSelectedMembers] = useState<MemberOption[]>([]);
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const { mode } = useColorScheme();
  const textColor = mode === 'dark' ? '#b6c2cf' : 'white';

  useImperativeHandle(ref, () => ({
    onClose: handleModalVisibility,
    clearSelections: () => {
      setSelectedMembers([]);
    },
  }));

  const handleModalVisibility = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <>
      <Button
        variant="outlined"
        startIcon={<PersonAddIcon />}
        sx={{ color: textColor, borderColor: textColor, '&:hover': { borderColor: textColor } }}
        onClick={handleModalVisibility}
      >
        Invite
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
          <Typography sx={{ mt: 2, mb: 4 }}>Add members to this board</Typography>
          <Autocomplete
            isOptionEqualToValue={(option, value) => option.name === value.name}
            getOptionLabel={(option) => option.name || ''}
            value={selectedMembers}
            options={members}
            fullWidth
            multiple
            onChange={(_, value) => setSelectedMembers(value)}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select members"
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isFetching && <CircularProgress color="inherit" size={20} />}
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
            disabled={selectedMembers.length === 0 || isFetching || isInviting}
            onClick={() => onInvite(selectedMembers)}
          >
            Invite
          </Button>
        </Stack>
      </Modal>
    </>
  );
});
