'use client';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import WorkspaceSidebar from './components/Sidebar';
import WorkspaceInfo from './components/Info';
import { useLazyGetWorkspaceListQuery } from '@/redux/services/workspace/workspace';
import { useEffect } from 'react';

function Workspace() {
  const [getWorkspaceList] = useLazyGetWorkspaceListQuery();

  useEffect(() => {
    getWorkspaceList();
  }, [getWorkspaceList]);

  return (
    <Box sx={{ height: '100%', minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mt: 0 }}>
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
