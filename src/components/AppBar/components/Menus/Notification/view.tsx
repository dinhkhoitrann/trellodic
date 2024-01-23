import { useState } from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge, Box, Card, Divider, Fade, Tooltip, Popper } from '@/components/UIElements';
import { useCustomTheme } from '@/common/styles/theme';
import Header from './components/Header';
import List from './components/List';
import { useNotiContext } from '.';
import { getUnreadNotifs } from './service';

function NotificationView() {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const { notifs } = useNotiContext();
  const unreadNotifs = getUnreadNotifs(notifs);
  const customTheme = useCustomTheme();

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
          <NotificationsNoneIcon
            sx={{
              color: (theme) =>
                theme.palette.mode === 'dark' ? customTheme.colors.textInDarkMode : theme.palette.common.white,
            }}
            onClick={handleOpen}
          />
        </Badge>
      </Tooltip>
      <Popper open={open} anchorEl={anchorEl} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Card
              sx={{
                bgcolor: (theme) =>
                  theme.palette.mode === 'dark' ? customTheme.colors.bgCardDark : theme.palette.common.white,
                minWidth: '500px',
                mr: 2,
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
