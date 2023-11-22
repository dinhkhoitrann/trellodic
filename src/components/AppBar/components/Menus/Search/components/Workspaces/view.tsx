import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import LaptopIcon from '@mui/icons-material/Laptop';
import { WorkspaceResult } from '@/types/search.type';
import ResultItem from '../ResultItem';

type WorkspacesViewProps = {
  workspaces: WorkspaceResult[] | undefined;
  onViewWorkspace: (_workspaceId: string) => void;
};

function WorkspacesView({ workspaces, onViewWorkspace }: WorkspacesViewProps) {
  if (!workspaces || workspaces.length === 0) {
    return;
  }

  return (
    <Box>
      <Typography sx={{ fontSize: '12px !important', fontWeight: '600', mt: 2, ml: 2 }}>WORKSPACES</Typography>
      <List sx={{ width: '100%' }}>
        {workspaces.map((workspace) => (
          <ResultItem
            key={workspace._id}
            startIcon={<LaptopIcon />}
            primaryText={workspace.workspaceTitle}
            onClick={() => onViewWorkspace(workspace._id)}
          />
        ))}
      </List>
    </Box>
  );
}

export default WorkspacesView;
