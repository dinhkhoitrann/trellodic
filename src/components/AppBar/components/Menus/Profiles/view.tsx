import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Avatar, Box, Divider, IconButton, Menu, MenuItem, Tooltip, ListItem } from '@/components/UIElements';
import Logout from '@mui/icons-material/Logout';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';

type ProfilesViewProps = {
  onLogout: () => void;
};

function ProfilesView({ onLogout }: ProfilesViewProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = !!anchorEl;
  const user = useAppSelector(selectUserProfile);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small" sx={{ padding: 0 }}>
          <Avatar sx={{ width: '36px', height: '36px' }}>{user?.name?.[0].toUpperCase() || ''}</Avatar>
        </IconButton>
      </Tooltip>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => router.push('/profile')}>
          <Avatar sx={{ width: 28, height: 28, mr: 2 }} /> Profile
        </MenuItem>
        <Divider />
        <MenuItem onClick={onLogout}>
          <ListItem.Icon>
            <Logout fontSize="small" />
          </ListItem.Icon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default ProfilesView;
