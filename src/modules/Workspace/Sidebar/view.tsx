import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import WorkspaceItem from './components/WorkspaceItem';
import { Workspace } from '@/types/workspace.type';

type WorkspaceSidebarViewProps = {
  workspaces: Workspace[];
};

function WorkspaceSidebarView({ workspaces }: WorkspaceSidebarViewProps) {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography>Workspaces</Typography>
        <IconButton>
          <AddIcon />
        </IconButton>
      </Stack>
      {workspaces.map((workspace) => (
        <WorkspaceItem key={workspace._id} workspace={workspace} />
      ))}
    </Box>
  );
}

export default WorkspaceSidebarView;
