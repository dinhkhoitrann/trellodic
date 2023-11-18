import { useState } from 'react';
import { useColorScheme } from '@mui/material';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Divider from '@mui/material/Divider';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Header from './components/Header';
import List from './components/List';
import { useNotiContext } from '.';
import { getUnreadNotifs } from './service';

function NotificationView() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const { notifs } = useNotiContext();
  const unreadNotifs = getUnreadNotifs(notifs);

  const { mode } = useColorScheme();
  const textColor = mode === 'dark' ? '#b6c2cf' : 'white';

  const canBeOpen = open && Boolean(anchorEl);
  const id = canBeOpen ? 'transition-popper' : undefined;

  const handleOpen = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen((previousOpen) => !previousOpen);
  };

  return (
    <Box>
      <Tooltip title="Notifications">
        <Badge
          color="warning"
          badgeContent={unreadNotifs.length}
          invisible={unreadNotifs.length === 0}
          sx={{ cursor: 'pointer' }}
        >
          <NotificationsNoneIcon sx={{ color: textColor }} onClick={handleOpen} />
        </Badge>
      </Tooltip>
      <Popper id={id} open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card
              sx={{
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#282e33' : 'white'),
                minWidth: '500px',
                mr: 2,
                borderRadius: '4px',
              }}
            >
              <Header />
              <Divider sx={{ mx: 3 }} />
              <List />
            </Card>
          </Fade>
        )}
      </Popper>
    </Box>
  );
}

export default NotificationView;
