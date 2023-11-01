import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceList } from '@/redux/slices/workspace';
import WorkspaceSections from './components/Sections';

function WorkspacesView() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const workspaceList = useAppSelector(selectWorkspaceList);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Button
        id="basic-button-workspaces"
        aria-controls={open ? 'basic-menu-workspaces' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        endIcon={<ExpandMoreIcon />}
        sx={{ color: 'white' }}
        onClick={handleClick}
      >
        Workspaces
      </Button>
      <Menu
        id="basic-menu-workspaces"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-workspaces',
        }}
      >
        <WorkspaceSections workspaces={workspaceList} />
      </Menu>
    </Box>
  );
}

export default WorkspacesView;
