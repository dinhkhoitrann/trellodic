import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { User } from '@/types/user.type';
import { useAlert, useAuthorized } from '@/hooks';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';
import { getMemberRole } from './service';
import { selectBoardDetails } from '@/redux/slices/board';

type ListViewProps = {
  members: Pick<User, '_id' | 'name' | 'avatar'>[];
  onDelete: (_memberId: string) => void;
};

function ListView({ members, onDelete }: ListViewProps) {
  const { handleOpenAlert, renderAlert } = useAlert({
    okText: 'Delete',
    title: 'Delete member?',
    content: 'Are you sure? This user can not see anything in this board',
    onOk: (params) => {
      onDelete(params[0]);
    },
  });
  const user = useAppSelector(selectUserProfile);
  const board = useAppSelector(selectBoardDetails);
  const { isBoardAdmin } = useAuthorized();
  const canDelete = (memberId: string) => isBoardAdmin && user?._id !== memberId;

  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Members
      </Typography>
      <List>
        {members?.map((member) => (
          <ListItem
            key={member._id}
            secondaryAction={
              canDelete(member._id) && (
                <IconButton edge="end" onClick={() => handleOpenAlert(member._id)}>
                  <DeleteIcon />
                </IconButton>
              )
            }
          >
            <ListItemAvatar>
              <Avatar src={member.avatar} alt={member.name} />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography sx={{ fontSize: '1rem !important', fontWeight: 600 }}>{member.name}</Typography>}
              secondary={getMemberRole(member._id, user?._id || '', board.admin as string)}
            />
          </ListItem>
        ))}
      </List>
      {renderAlert()}
    </>
  );
}

export default ListView;
