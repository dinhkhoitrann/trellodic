import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function CommentListView() {
  return (
    <Box sx={{ mt: 2 }}>
      <Stack direction="row" alignItems="flex-start" spacing={1}>
        <Avatar alt="Tran Dinh Khoi" />
        <Box sx={{ flex: 1 }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Typography sx={{ fontWeight: 'bold' }}>Trần Đình Khôi</Typography>
            <Typography variant="caption">{new Date().toDateString()}</Typography>
          </Stack>
          <Card
            sx={{
              my: 1,
              '.MuiCardContent-root:last-child': {
                pb: 2,
              },
            }}
          >
            <CardContent>This is a comment</CardContent>
          </Card>
          <Stack direction="row" alignItems="center" spacing={1}>
            <Button>Edit</Button>
            <Button color="error">Delete</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default CommentListView;
