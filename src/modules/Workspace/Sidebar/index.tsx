'use client';
import { useGetWorkspaceListQuery } from '@/redux/services/workspace/workspace';
import WorkspaceSidebarView from './view';

function WorkspaceSidebar() {
  const { data, isFetching } = useGetWorkspaceListQuery(
    {
      userId: '2',
    },
    { pollingInterval: 60000 * 5 },
  );

  return <WorkspaceSidebarView isFetching={isFetching} workspaces={data || []} />;
}

export default WorkspaceSidebar;
