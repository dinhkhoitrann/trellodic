'use client';
import { useGetWorkspaceListQuery } from '@/redux/services/workspace/workspace';
import WorkspaceSidebarView from './view';

function WorkspaceSidebar() {
  const { data } = useGetWorkspaceListQuery(
    {
      userId: '1',
    },
    { pollingInterval: 60000 * 5 },
  );

  return <WorkspaceSidebarView workspaces={data || []} />;
}

export default WorkspaceSidebar;
