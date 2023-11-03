import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { useLazyGetWorkspaceQuery } from '@/redux/services/workspace/workspace';
import { Workspace } from '@/types/workspace.type';

const StyledMenuItem = styled(MenuItem)(() => ({
  minWidth: '304px',
}));

type WorkspaceListProps = {
  workspaces: Partial<Workspace>[];
};

function WorkspaceList({ workspaces }: WorkspaceListProps) {
  const [getWorkspace] = useLazyGetWorkspaceQuery({
    pollingInterval: 60000 * 5,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

  return (
    <>
      {workspaces.map((workspace) => (
        <StyledMenuItem key={workspace._id} onClick={() => getWorkspace({ workspaceId: workspace._id || '' })}>
          <ListItemIcon
            sx={{
              width: '30px',
              height: '30px',
              lineHeight: '30px',
              bgcolor: '#4bce97',
              borderRadius: '4px',
              color: 'black',
              textAlign: 'center',
              fontSize: '14px !important',
              fontWeight: 'bold',
              justifyContent: 'center',
              mr: 2,
            }}
          >
            {workspace.name?.[0]}
          </ListItemIcon>
          <ListItemText>{workspace.name}</ListItemText>
        </StyledMenuItem>
      ))}
    </>
  );
}

export default WorkspaceList;
