import { useRef, useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Divider, Skeleton, Stack, TextField, Typography } from '@/components/UIElements';
import { useCustomTheme } from '@/common/styles/theme';

type WorkspaceHeaderViewProps = {
  workspaceName: string;
  onEditName: (_editedName: string) => void;
};

function WorkspaceHeaderView({ workspaceName, onEditName }: WorkspaceHeaderViewProps) {
  const [editNameMode, setEditNameMode] = useState(false);
  const workspaceNameRef = useRef<HTMLInputElement>();
  const customTheme = useCustomTheme();

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
              background: customTheme.colors.workspaceAvatar,
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
