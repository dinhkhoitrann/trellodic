import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { User } from '@/types/user.type';

type MembersViewProps = {
  members: Pick<User, '_id' | 'name' | 'avatar'>[];
};

function MembersView({ members }: MembersViewProps) {
  return (
    <AvatarGroup
      max={4}
      sx={{
        '& .MuiAvatar-root': {
          width: '34px',
          height: '34px',
          border: 'none',
          cursor: 'pointer',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#546170' : '#a4b0be'),
        },
      }}
    >
      {members?.map((member) => (
        <Tooltip key={member._id} title={member.name}>
          <Avatar alt={member.name} src={member.avatar} />
        </Tooltip>
      ))}
    </AvatarGroup>
  );
}

export default MembersView;
