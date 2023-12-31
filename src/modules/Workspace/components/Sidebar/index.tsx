'use client';
import { useGetWorkspaceListQuery, useLazyGetWorkspaceQuery } from '@/redux/services/workspace/workspace';
import WorkspaceSidebarView from './view';
import { useEffect } from 'react';

function WorkspaceSidebar() {
  const { data, isFetching, isSuccess } = useGetWorkspaceListQuery();
  const [getWorkspace] = useLazyGetWorkspaceQuery();

  useEffect(() => {
    if (data && data.length > 0) {
      getWorkspace({ workspaceId: data[0]._id });
    }
  }, [data, isSuccess, getWorkspace]);

  return <WorkspaceSidebarView isFetching={isFetching} workspaces={data || []} />;
}

export default WorkspaceSidebar;
