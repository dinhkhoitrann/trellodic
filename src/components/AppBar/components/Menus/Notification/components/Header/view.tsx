import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import { useNotiContext } from '../..';

function HeaderView() {
  const { isUnreadMode, setIsUnreadMode } = useNotiContext();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUnreadMode(event.target.checked);
  };

  return (
    <Stack direction="row" justifyContent="space-between" sx={{ p: 3, pb: 2 }}>
      <Typography variant="h6" fontWeight="500">
        Notifications
      </Typography>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Only show unread</Typography>
        <Switch checked={isUnreadMode} onChange={handleChange} inputProps={{ role: 'switch' }} />
      </Stack>
    </Stack>
  );
}

export default HeaderView;
