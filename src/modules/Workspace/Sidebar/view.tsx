import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import WorkspaceItem from './components/WorkspaceItem';
import { Workspace } from '@/types/workspace.type';
import CreateWorkspaceModal from './components/CreateWorkspace';

type WorkspaceSidebarViewProps = {
  workspaces: Workspace[];
};

function WorkspaceSidebarView({ workspaces }: WorkspaceSidebarViewProps) {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleShowCreateModal = () => {
    setShowCreateModal((prevState) => !prevState);
  };

  return (
    <>
      <Box>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography>Workspaces</Typography>
          <IconButton onClick={handleShowCreateModal}>
            <AddIcon />
          </IconButton>
        </Stack>
        {workspaces.map((workspace) => (
          <WorkspaceItem key={workspace._id} workspace={workspace} />
        ))}
      </Box>
      <CreateWorkspaceModal isShowCreateModal={showCreateModal} onClose={handleShowCreateModal} />
    </>
  );
}

export default WorkspaceSidebarView;
