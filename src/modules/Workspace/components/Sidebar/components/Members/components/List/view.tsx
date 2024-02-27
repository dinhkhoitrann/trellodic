import { Avatar, IconButton, List, ListItem, Typography } from '@/components/UIElements';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import { selectUserProfile } from '@/redux/slices/user';
import { getMemberRole } from '@/utils/helpers';
import { useAlert, useAuthorized } from '@/hooks';
import { User } from '@/types/user.type';

type ListViewProps = {
  onRemoveMember: (_memberId: string) => void;
};

function ListView({ onRemoveMember }: ListViewProps) {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const user = useAppSelector(selectUserProfile);

  const { renderAlert, handleOpenAlert } = useAlert({
    okText: 'Delete',
    title: 'Delete member?',
    content: 'Are you sure you would like to delete member?',
    onOk(params) {
      const [memberId] = params;
      onRemoveMember(memberId);
    },
  });

  const { isWorkspaceAdmin } = useAuthorized();
  const canDelete = (memberId: string) => isWorkspaceAdmin && user?._id !== memberId;

  return (
    <>
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
        Members
      </Typography>
      <List>
        {workspace.members?.map((item) => {
          const member = { ...(item as User) };
          return (
            <ListItem
              key={member._id}
              secondaryAction={
                canDelete(member._id) && (
                  <IconButton edge="end" onClick={() => handleOpenAlert(member._id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                )
              }
            >
              <ListItem.Avatar>
                <Avatar src={member.avatar} alt={member.name} />
              </ListItem.Avatar>
              <ListItem.Text
                primary={<Typography sx={{ fontSize: '1rem !important', fontWeight: 600 }}>{member.name}</Typography>}
                secondary={getMemberRole(member._id, user?._id || '', workspace.ownerUserId!)}
              />
            </ListItem>
          );
        })}
      </List>
      {renderAlert()}
    </>
  );
}

export default ListView;
