import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Workspace } from '@/types/workspace.type';
import WorkspaceList from '../List';
import { getWorkspaces } from './service';
import { Divider } from '@mui/material';

type WorkspaceSectionsProps = {
  workspaces: Partial<Workspace>[];
};

function WorkspaceSections({ workspaces }: WorkspaceSectionsProps) {
  const { guestWorkspaces, ownerWorkspaces } = getWorkspaces(workspaces, 'o1');
  return (
    <Box sx={{ mt: 1 }}>
      {ownerWorkspaces.length > 0 && (
        <Box>
          <Typography sx={{ ml: 2, mb: 1 }}>Your workspaces</Typography>
          <WorkspaceList workspaces={ownerWorkspaces} />
        </Box>
      )}
      {guestWorkspaces.length > 0 && (
        <Box>
          <Divider sx={{ my: 2 }} />
          <Typography sx={{ ml: 2, mb: 1 }}>Guest workspaces</Typography>
          <WorkspaceList workspaces={guestWorkspaces} />
        </Box>
      )}
    </Box>
  );
}

export default WorkspaceSections;
