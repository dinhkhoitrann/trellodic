import { useLazyGetWorkspaceQuery } from '@/redux/services/workspace/workspace';
import { Workspace } from '@/types/workspace.type';
import WorkspaceItemView from './view';

type WorkspaceItemProps = {
  workspace: Workspace;
};

function WorkspaceItem({ workspace }: WorkspaceItemProps) {
  const [getWorkspace] = useLazyGetWorkspaceQuery({
    pollingInterval: 60000 * 5,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  const handleGetWorkspace = () => {
    getWorkspace({ workspaceId: workspace._id });
  };

  return <WorkspaceItemView name={workspace.name} onGetWorkspace={handleGetWorkspace} />;
}

export default WorkspaceItem;
