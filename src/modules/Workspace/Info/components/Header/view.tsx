import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EditIcon from '@mui/icons-material/Edit';

function WorkspaceHeaderView() {
  return (
    <>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Box
          sx={{
            width: '60px',
            height: '60px',
            lineHeight: '60px',
            bgcolor: '#4bce97',
            borderRadius: '4px',
            color: 'black',
            textAlign: 'center',
            fontSize: '2rem',
            fontWeight: 'bold',
          }}
        >
          T
        </Box>
        <Box>
          <Typography variant="h6">
            Tran Dinh Khoi&apos;s workspace <EditIcon sx={{ fontSize: '16px', ml: 1, cursor: 'pointer' }} />
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1}>
            <LockOutlinedIcon fontSize="small" sx={{ opacity: '0.75' }} />
            <Typography variant="caption">Private</Typography>
          </Stack>
        </Box>
      </Stack>
      <Divider sx={{ mt: 2 }} />
    </>
  );
}

export default WorkspaceHeaderView;
