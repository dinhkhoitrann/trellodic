import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Menu } from '@/components/UIElements';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceList } from '@/redux/slices/workspace';
import { useCustomTheme } from '@/common/styles/theme';
import WorkspaceSections from './components/Sections';

function WorkspacesView() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const workspaceList = useAppSelector(selectWorkspaceList);
  const customTheme = useCustomTheme();
  const open = !!anchorEl;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        endIcon={<ExpandMoreIcon />}
        sx={{ color: (theme) => (theme.palette.mode === 'dark' ? customTheme.colors.textInDarkMode : 'white') }}
        onClick={handleClick}
      >
        Workspaces
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <WorkspaceSections workspaces={workspaceList} />
      </Menu>
    </Box>
  );
}

export default WorkspacesView;
