import { useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EditIcon from '@mui/icons-material/Edit';

type WorkspaceHeaderViewProps = {
  workspaceName: string;
  onEditName: (_editedName: string) => void;
};

function WorkspaceHeaderView({ workspaceName, onEditName }: WorkspaceHeaderViewProps) {
  const [editNameMode, setEditNameMode] = useState(false);
  const workspaceNameRef = useRef<HTMLInputElement>();

  const handleEditMode = () => {
    setEditNameMode((prevMode) => !prevMode);
  };

  const handleEditName = () => {
    if (workspaceNameRef.current && workspaceNameRef.current.value.trim() !== workspaceName.trim()) {
      onEditName(workspaceNameRef.current?.value);
    }
    handleEditMode();
  };

  return (
    <>
      {workspaceName ? (
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box
            sx={{
              width: '60px',
              height: '60px',
              lineHeight: '60px',
              bgcolor: '#4bce97',
              borderRadius: '4px',
              color: 'black',
              textAlign: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            {workspaceName[0].toUpperCase()}
          </Box>
          <Box>
            {!editNameMode && (
              <Typography variant="h6">
                {workspaceName}
                <EditIcon sx={{ fontSize: '16px', ml: 1, cursor: 'pointer' }} onClick={handleEditMode} />
              </Typography>
            )}
            {editNameMode && (
              <TextField
                inputRef={workspaceNameRef}
                defaultValue={workspaceName}
                fullWidth
                autoFocus
                size="small"
                placeholder="Edit workspace name"
                onBlur={handleEditName}
              />
            )}
            <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: '6px' }}>
              <LockOutlinedIcon fontSize="small" sx={{ opacity: '0.75' }} />
              <Typography variant="caption">Private</Typography>
            </Stack>
          </Box>
        </Stack>
      ) : (
        <Stack direction="row" alignItems="center" spacing={2}>
          <Skeleton variant="rounded" height={60} width={60} />
          <Box>
            <Skeleton variant="rounded" height={20} width={300} />
            <Skeleton variant="rounded" height={20} width={150} sx={{ mt: 1 }} />
          </Box>
        </Stack>
      )}

      <Divider sx={{ mt: 4 }} />
    </>
  );
}

export default WorkspaceHeaderView;
