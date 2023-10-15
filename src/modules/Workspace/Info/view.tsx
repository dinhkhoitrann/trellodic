import Box from '@mui/material/Box';
import WorkspaceHeader from './components/Header';
import Sections from './components/Sections';

function WorkspaceInfoView() {
  return (
    <Box>
      <WorkspaceHeader />
      <Sections />
    </Box>
  );
}

export default WorkspaceInfoView;
