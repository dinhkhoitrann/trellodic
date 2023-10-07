import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import withBoard, { BoardGlobalProps } from '@/hocs/withBoard';

function MembersView({ card }: BoardGlobalProps) {
  const members = card.memberIds;

  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500 }}>Members</Typography>
      <Stack direction="row" spacing={1}>
        {members?.map((mem, index) => (
          <Avatar key={index} alt="Tran Dinh Khoi" src={mem.avatar} />
        ))}
      </Stack>
    </Box>
  );
}

export default withBoard(MembersView);
