import { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { User } from '@/types/user.type';
import Modal from '@/components/Modal';
import List from './components/List';

type MembersViewProps = {
  members: Pick<User, '_id' | 'name' | 'avatar'>[];
};

function MembersView({ members }: MembersViewProps) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);

  const handleModalVisibility = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  return (
    <>
      <AvatarGroup
        max={4}
        sx={{
          '& .MuiAvatar-root': {
            width: '34px',
            height: '34px',
            border: 'none',
            cursor: 'pointer',
          },
        }}
        onClick={handleModalVisibility}
      >
        {members?.map((member) => (
          <Tooltip key={member._id} title={member.name}>
            <Avatar alt={member.name} src={member.avatar} />
          </Tooltip>
        ))}
      </AvatarGroup>
      <Modal
        isVisibleModal={isVisibleModal}
        sx={{
          transform: 'translate(-50%, -250px)',
          width: { xs: '95%', md: '600px' },
          bgcolor: 'background.paper',
          border: (theme) => (theme.palette.mode === 'dark' ? '1px solid #716e6e' : 'unset'),
        }}
        onClose={handleModalVisibility}
      >
        <List members={members} />
      </Modal>
    </>
  );
}

export default MembersView;
