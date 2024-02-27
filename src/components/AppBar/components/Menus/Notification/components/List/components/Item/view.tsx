import moment from 'moment';
import PersonIcon from '@mui/icons-material/Person';
import { Avatar, ListItem, MenuItem, Typography } from '@/components/UIElements';
import { Notification } from '@/types/noti.type';

type NotiItemViewProps = {
  noti: Notification;
  onMarkAsRead: (_notiId: string) => void;
};

function NotiItemView({ noti, onMarkAsRead }: NotiItemViewProps) {
  return (
    <MenuItem disabled={noti.isRead} sx={{ py: 1 }} key={noti._id} onClick={() => onMarkAsRead(noti._id)}>
      <ListItem.Avatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItem.Avatar>
      <ListItem.Text
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
