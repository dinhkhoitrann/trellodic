import { User } from '@/types/user.type';
import ListView from './view';
import { useRemoveMemberMutation } from '@/redux/services/board/member';
import { BoardGlobalProps, withBoard } from '@/hocs';

type ListProps = BoardGlobalProps & {
  members: Pick<User, '_id' | 'name' | 'avatar'>[];
};

function List({ members, boardId, onRefreshBoard }: ListProps) {
  const [removeMember] = useRemoveMemberMutation();

  const handleDelete = (memberId: string) => {
    removeMember({ boardId, memberId, onSuccess: onRefreshBoard });
  };

  return <ListView members={members} onDelete={handleDelete} />;
}

export default withBoard(List);
