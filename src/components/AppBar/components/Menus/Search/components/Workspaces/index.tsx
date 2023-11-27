import { useRouter } from 'next/navigation';
import { useLazyGetWorkspaceQuery } from '@/redux/services/workspace/workspace';
import { WorkspaceResult } from '@/types/search.type';
import WorkspacesView from './view';

type WorkspacesProps = {
  workspaces: WorkspaceResult[] | undefined;
  onCloseResult: () => void;
};

function Workspaces({ workspaces, onCloseResult }: WorkspacesProps) {
  const [getWorkspace] = useLazyGetWorkspaceQuery({
    pollingInterval: 60000 * 5,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const router = useRouter();

  const handleViewWorkspace = async (workspaceId: string) => {
    onCloseResult();
    const workspace = await getWorkspace({ workspaceId }).unwrap();
    if (workspace) {
      router.push('/');
    }
  };

  return <WorkspacesView workspaces={workspaces} onViewWorkspace={handleViewWorkspace} />;
}

export default Workspaces;
