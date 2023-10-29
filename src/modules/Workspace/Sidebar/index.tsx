'use client';
import { useGetWorkspaceListQuery } from '@/redux/services/workspace/workspace';
import WorkspaceSidebarView from './view';
import { withAuth } from '@/hocs';

function WorkspaceSidebar() {
  const { data } = useGetWorkspaceListQuery(
    {
      userId: '2',
    },
    { pollingInterval: 60000 * 5 },
  );

  return <WorkspaceSidebarView workspaces={data || []} />;
}

export default withAuth(WorkspaceSidebar);
