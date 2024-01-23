import WorkspacesIcon from '@mui/icons-material/Workspaces';
import { Box, List, Typography } from '@/components/UIElements';
import { Workspace } from '@/types/workspace.type';
import ResultItem from '../ResultItem';

type WorkspacesViewProps = {
  workspaces: Workspace[] | undefined;
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
            startIcon={<WorkspacesIcon />}
            primaryText={workspace.name}
            onClick={() => onViewWorkspace(workspace._id)}
          />
        ))}
      </List>
    </Box>
  );
}

export default WorkspacesView;
