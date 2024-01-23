import { BoardGlobalProps, withBoard } from '@/hocs';
import MembersView from './view';
import { useGetMembersQuery } from '@/redux/services/board/member';

function Members({ boardId }: BoardGlobalProps) {
  const { data } = useGetMembersQuery({ boardId });

  return <MembersView members={data || []} />;
}

export default withBoard(Members);
