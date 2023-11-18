'use client';
import { useAppSelector } from '@/redux/store';
import Box from '@mui/material/Box';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import WorkspaceHeader from './components/Header';
import Sections from './components/Sections';

function WorkspaceInfoView() {
  const workspace = useAppSelector(selectWorkspaceDetails);

  return (
    <Box>
      <WorkspaceHeader workspaceName={workspace.name || ''} workspaceId={workspace._id || ''} />
      <Sections />
    </Box>
  );
}

export default WorkspaceInfoView;
