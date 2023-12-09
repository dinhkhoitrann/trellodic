'use client';
import { useAppSelector } from '@/redux/store';
import Box from '@mui/material/Box';
import Tabs from '@/components/Tab';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import WorkspaceHeader from './components/Header';
import Sections from './components/Sections';
import Insight from './components/Insight';

function WorkspaceInfoView() {
  const workspace = useAppSelector(selectWorkspaceDetails);

  return (
    <Box>
      <WorkspaceHeader workspaceName={workspace.name || ''} workspaceId={workspace._id || ''} />
      <Tabs>
        <Tabs.Header items={['Boards', 'Insight']} />
        <Tabs.Panel index={0}>
          <Sections />
        </Tabs.Panel>
        <Tabs.Panel index={1}>
          <Insight />
        </Tabs.Panel>
      </Tabs>
    </Box>
  );
}

export default WorkspaceInfoView;
