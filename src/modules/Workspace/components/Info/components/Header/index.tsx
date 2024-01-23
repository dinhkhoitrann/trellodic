import { useEditWorkspaceMutation } from '@/redux/services/workspace/workspace';
import WorkspaceHeaderView from './view';

type WorkspaceHeaderProps = {
  workspaceId: string;
  workspaceName: string;
};

function WorkspaceHeader({ workspaceId, workspaceName }: WorkspaceHeaderProps) {
  const [editWorkspaceName] = useEditWorkspaceMutation();

  const handleEditWorkspaceName = (editedName: string) => {
    editWorkspaceName({ workspaceId, name: editedName });
  };

  return <WorkspaceHeaderView workspaceName={workspaceName} onEditName={handleEditWorkspaceName} />;
}

export default WorkspaceHeader;
