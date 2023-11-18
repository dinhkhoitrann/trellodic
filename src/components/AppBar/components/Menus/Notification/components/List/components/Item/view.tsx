import moment from 'moment';
import MenuItem from '@mui/material/MenuItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import { Notification } from '@/types/noti.type';

type NotiItemViewProps = {
  noti: Notification;
  onMarkAsRead: (_notiId: string) => void;
};

function NotiItemView({ noti, onMarkAsRead }: NotiItemViewProps) {
  return (
    <MenuItem disabled={noti.isRead} sx={{ py: 1 }} key={noti._id} onClick={() => onMarkAsRead(noti._id)}>
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={
          <Typography>
            <b>{noti.triggeredBy}</b> {noti.activity}
          </Typography>
        }
        secondary={<Typography sx={{ fontSize: '12px !important' }}>{moment(noti.createdOn).fromNow()}</Typography>}
      />
    </MenuItem>
  );
}

export default NotiItemView;
