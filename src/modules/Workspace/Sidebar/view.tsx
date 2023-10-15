import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import WorkspaceItem from './components/WorkspaceItem';

function WorkspaceSidebarView() {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>Workspaces</Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Stack>
      <WorkspaceItem />
      <WorkspaceItem />
      <WorkspaceItem />
      <WorkspaceItem />
    </Box>
  );
}

export default WorkspaceSidebarView;
