import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';

function MembersView() {
  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500 }}>Members</Typography>
      <Stack direction="row" spacing={1}>
        <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
        <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
        <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
        <IconButton>
          <AddIcon />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default MembersView;
