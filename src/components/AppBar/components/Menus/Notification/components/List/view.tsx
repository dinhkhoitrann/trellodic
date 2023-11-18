import Image from 'next/image';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useNotiContext } from '../..';
import { filterNotiList } from '../../service';
import NotiItem from './components/Item';

function ListView() {
  const { isUnreadMode, notifs } = useNotiContext();
  const list = filterNotiList(notifs, isUnreadMode);

  return (
    <>
      {list.length === 0 ? (
        <Stack justifyContent="center" alignItems="center" sx={{ height: '300px' }}>
          <Image alt="No notifications found" src="/empty-notification.svg" width={150} height={150} />
          <Typography variant="h6" sx={{ mt: 1 }}>
            No {isUnreadMode ? 'unread' : ''} notifications
          </Typography>
        </Stack>
      ) : (
        <MenuList sx={{ maxHeight: '350px', overflowY: 'auto' }}>
          {list.map((noti) => (
            <NotiItem key={noti._id} noti={noti} />
          ))}
        </MenuList>
      )}
    </>
  );
}

export default ListView;
