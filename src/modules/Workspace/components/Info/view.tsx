'use client';
import Image from 'next/image';
import { isEmpty } from 'lodash';
import { Box, Button, Typography } from '@/components/UIElements';
import Tabs from '@/components/Tab';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails, selectWorkspaceList } from '@/redux/slices/workspace';
import { useGetWorkspaceListQuery } from '@/redux/services/workspace/workspace';
import { useAuthorized, useCreateWorkspace } from '@/hooks';
import WorkspaceHeader from './components/Header';
import Sections from './components/Sections';
import Insight from './components/Insight';

function WorkspaceInfoView() {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const workspaceList = useAppSelector(selectWorkspaceList);
  const { isLoading } = useGetWorkspaceListQuery();
  const { renderCreateWorkspaceModal, handleShowCreateModal } = useCreateWorkspace();
  const { isWorkspaceAdmin } = useAuthorized();

  if (isEmpty(workspaceList) && !isLoading) {
    return (
      <>
        <Box sx={{ textAlign: 'center', my: 6, px: 3 }}>
          <Image src="/box.png" width={200} height={200} alt="No workspaces found" />
          <Typography variant="h6" sx={{ fontWeight: 600, mt: 2 }}>
            Let&apos;s create your first workspace to start right now
          </Typography>
          <Button variant="contained" sx={{ minWidth: '200px', mt: 2 }} onClick={handleShowCreateModal}>
            Create
          </Button>
        </Box>
        {renderCreateWorkspaceModal()}
      </>
    );
  }

  return (
    <Box>
      <WorkspaceHeader workspaceName={workspace.name || ''} workspaceId={workspace._id || ''} />
      {isWorkspaceAdmin ? (
        <Tabs>
          <Tabs.Header items={['Boards', 'Insight']} />
          <Tabs.Panel index={0}>
            <Sections />
          </Tabs.Panel>
          <Tabs.Panel index={1}>
            <Insight />
          </Tabs.Panel>
        </Tabs>
      ) : (
        <Sections />
      )}
    </Box>
  );
}

export default WorkspaceInfoView;
