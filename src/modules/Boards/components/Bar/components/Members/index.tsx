import { BoardGlobalProps, withBoard } from '@/hocs';
import { useGetMembersQuery } from '@/redux/services/board/member';
import MembersView from './view';

function Members({ boardId }: BoardGlobalProps) {
  const { data } = useGetMembersQuery({ boardId });

  return <MembersView members={data || []} />;
}

export default withBoard(Members);
