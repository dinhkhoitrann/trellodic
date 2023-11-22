import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { WorkspaceResult } from '@/types/search.type';
import ResultItem from '../ResultItem';

type WorkspacesViewProps = {
  workspaces: WorkspaceResult[] | undefined;
  onViewWorkspace: (_workspaceId: string) => void;
};

function WorkspacesView({ workspaces, onViewWorkspace }: WorkspacesViewProps) {
  if (!workspaces || workspaces.length === 0) {
    return;
  }

  return (
    <Box>
      <Typography sx={{ fontSize: '12px !important', fontWeight: '600', mt: 2, ml: 2 }}>WORKSPACES</Typography>
      <List sx={{ width: '100%' }}>
        {workspaces.map((workspace) => (
          <ResultItem
            key={workspace._id}
            startIcon={
              workspace.workspaceImage ? (
                <Image
                  src={workspace.workspaceImage}
                  width={24}
                  height={24}
                  style={{ borderRadius: '4px' }}
                  alt="Workspace image"
                />
              ) : (
                <Box
                  sx={{
                    width: '24px',
                    height: '24px',
                    lineHeight: '24px',
                    bgcolor: '#4bce97',
                    borderRadius: '4px',
                    color: 'black',
                    textAlign: 'center',
                    fontSize: '14px !important',
                    fontWeight: 'bold',
                  }}
                >
                  {workspace.workspaceTitle[0]}
                </Box>
              )
            }
            primaryText={workspace.workspaceTitle}
            onClick={() => onViewWorkspace(workspace._id)}
          />
        ))}
      </List>
    </Box>
  );
}

export default WorkspacesView;
