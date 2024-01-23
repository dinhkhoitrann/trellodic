'use client';
import { useEffect } from 'react';
import { Box, Container, Grid } from '@/components/UIElements';
import { useLazyGetWorkspaceListQuery } from '@/redux/services/workspace/workspace';
import WorkspaceSidebar from './components/Sidebar';
import WorkspaceInfo from './components/Info';

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
