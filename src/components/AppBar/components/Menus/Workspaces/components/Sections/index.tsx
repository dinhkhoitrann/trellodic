import { Box, Divider } from '@/components/UIElements';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';
import { Workspace } from '@/types/workspace.type';
import WorkspaceList from '../List';
import { getWorkspaces } from './service';

type WorkspaceSectionsProps = {
  workspaces: Partial<Workspace>[];
};

function WorkspaceSections({ workspaces }: WorkspaceSectionsProps) {
  const user = useAppSelector(selectUserProfile);
  const { guestWorkspaces, ownerWorkspaces } = getWorkspaces(workspaces, user?._id);

  return (
    <Box sx={{ mt: 1 }}>
      <WorkspaceList workspaces={ownerWorkspaces} title="Your workspaces" />
      {guestWorkspaces.length > 0 && <Divider sx={{ my: 2 }} />}
      <WorkspaceList workspaces={guestWorkspaces} title="Guest workspaces" />
    </Box>
  );
}

export default WorkspaceSections;
