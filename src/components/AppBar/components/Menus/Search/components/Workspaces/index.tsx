import { WorkspaceResult } from '@/types/search.type';
import WorkspacesView from './view';

type WorkspacesProps = {
  workspaces: WorkspaceResult[] | undefined;
};

function Workspaces({ workspaces }: WorkspacesProps) {
  const handleViewWorkspace = (workspaceId: string) => {
    console.log(workspaceId);
  };

  return <WorkspacesView workspaces={workspaces} onViewWorkspace={handleViewWorkspace} />;
}

export default Workspaces;
