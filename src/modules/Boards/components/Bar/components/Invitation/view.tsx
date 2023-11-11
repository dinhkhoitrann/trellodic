import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';
import Modal from '@/components/Modal';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

type InvitationViewProps = {
  onClose: () => void;
};

function InvitationView({ onClose }: InvitationViewProps) {
  return (
    <Modal
      isVisibleModal
      onClose={onClose}
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
      </Stack>
    </Modal>
  );
}

export default InvitationView;
