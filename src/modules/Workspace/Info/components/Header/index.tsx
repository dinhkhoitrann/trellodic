import WorkspaceHeaderView from './view';

type WorkspaceHeaderProps = {
  workspaceName: string;
};

function WorkspaceHeader({ workspaceName }: WorkspaceHeaderProps) {
  return <WorkspaceHeaderView workspaceName={workspaceName} />;
}

export default WorkspaceHeader;
