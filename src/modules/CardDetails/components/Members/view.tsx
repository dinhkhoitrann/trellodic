import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

function MembersView() {
  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500 }}>Members</Typography>
      <Stack direction="row" spacing={1}>
        <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
        <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
        <Avatar alt="Tran Dinh Khoi" src="https://i.pravatar.cc/" />
        <Avatar>
          <Button sx={{ height: '100%' }}>
            <AddIcon />
          </Button>
        </Avatar>
      </Stack>
    </Box>
  );
}

export default MembersView;
