import WorkspacesView from './view';

function Workspaces() {
  const handleViewWorkspace = (workspaceId: string) => {
    console.log(workspaceId);
  };

  return <WorkspacesView onViewWorkspace={handleViewWorkspace} />;
}

export default Workspaces;
