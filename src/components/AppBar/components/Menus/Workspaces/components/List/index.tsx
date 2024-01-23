import { useRouter } from 'next/navigation';
import { styled } from '@mui/material/styles';
import { Typography, ListItem, MenuItem } from '@/components/UIElements';
import { useLazyGetWorkspaceQuery } from '@/redux/services/workspace/workspace';
import { useCustomTheme } from '@/common/styles/theme';
import { Workspace } from '@/types/workspace.type';

const StyledMenuItem = styled(MenuItem)(() => ({
  minWidth: '304px',
}));

type WorkspaceListProps = {
  title: string;
  workspaces: Partial<Workspace>[];
};

function WorkspaceList({ title, workspaces }: WorkspaceListProps) {
  const [getWorkspace] = useLazyGetWorkspaceQuery({
    pollingInterval: 60000 * 5,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });
  const router = useRouter();
  const customTheme = useCustomTheme();

  const handleSelectWorkspace = (workspaceId: string) => {
    router.push('/');
    getWorkspace({ workspaceId: workspaceId });
  };

  return (
    <>
      {workspaces.length > 0 && <Typography sx={{ ml: 2, mb: 1 }}>{title}</Typography>}
      {workspaces.map((workspace) => (
        <StyledMenuItem key={workspace._id} onClick={() => handleSelectWorkspace(workspace._id || '')}>
          <ListItem.Icon
            sx={{
              width: '30px',
              height: '30px',
              lineHeight: '30px',
              background: customTheme.colors.workspaceAvatar,
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
          </ListItem.Icon>
          <ListItem.Text>{workspace.name}</ListItem.Text>
        </StyledMenuItem>
      ))}
    </>
  );
}

export default WorkspaceList;
