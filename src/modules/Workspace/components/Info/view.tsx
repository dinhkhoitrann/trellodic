'use client';
import { useAppSelector } from '@/redux/store';
import Box from '@mui/material/Box';
import Tabs from '@/components/Tab';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import { useAuthorized } from '@/hooks';
import WorkspaceHeader from './components/Header';
import Sections from './components/Sections';
import Insight from './components/Insight';

function WorkspaceInfoView() {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const { isWorkspaceAdmin } = useAuthorized();

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
