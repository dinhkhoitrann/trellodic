import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import WorkspaceSidebar from '@/modules/Workspace/Sidebar';
import WorkspaceInfo from '@/modules/Workspace/Info';

function Workspace() {
  return (
    <Container maxWidth="lg">
      <Grid container sx={{ my: 2 }} spacing={4}>
        <Grid item sm={12} md={3}>
          <WorkspaceSidebar />
        </Grid>
        <Grid item sm={12} md={9}>
          <WorkspaceInfo />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Workspace;
