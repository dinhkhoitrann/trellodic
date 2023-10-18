'use client';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import BoardItem from './components/BoardItem';
import Link from 'next/link';
import CreateBoard from './components/CreateBoard';

function SectionsView() {
  return (
    <Box sx={{ ml: 2, my: 4 }}>
      <Box>
        <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 2 }}>
          <PersonOutlinedIcon sx={{ opacity: '0.75' }} />
          <Typography sx={{ fontSize: '1rem !important', fontWeight: 'bold' }}>Your boards</Typography>
        </Stack>
        <Grid container spacing={2}>
          <Grid item>
            <Link href="/boards/1">
              <BoardItem
                sx={{
                  bgcolor: '#ae4d7b',
                  padding: 1,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Board của tui nè nha
              </BoardItem>
            </Link>
          </Grid>
          <Grid item>
            <CreateBoard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SectionsView;
