import { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import WorkspaceItem from './components/WorkspaceItem';
import { Workspace } from '@/types/workspace.type';
import CreateWorkspaceModal from './components/CreateWorkspace';

type WorkspaceSidebarViewProps = {
  isFetching: boolean;
  workspaces: Workspace[];
};

function WorkspaceSidebarView({ isFetching, workspaces }: WorkspaceSidebarViewProps) {
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
        {isFetching ? (
          <Stack spacing={1}>
            {[...Array(2)].map((_, index) => (
              <Skeleton key={index} variant="rounded" height={30} />
            ))}
          </Stack>
        ) : (
          workspaces.map((workspace) => <WorkspaceItem key={workspace._id} workspace={workspace} />)
        )}
      </Box>
      <CreateWorkspaceModal isShowCreateModal={showCreateModal} onClose={handleShowCreateModal} />
    </>
  );
}

export default WorkspaceSidebarView;
