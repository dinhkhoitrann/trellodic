'use client';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import WorkspaceSidebar from '@/modules/Workspace/Sidebar';
import WorkspaceInfo from '@/modules/Workspace/Info';
import { Box } from '@mui/material';

function Workspace() {
  return (
    <Box sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#24272b' : 'white'), height: '100%', py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item sm={12} md={3}>
            <WorkspaceSidebar />
          </Grid>
          <Grid item sm={12} md={9}>
            <WorkspaceInfo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Workspace;
