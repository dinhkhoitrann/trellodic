import { useQuery } from '@tanstack/react-query';
import { getBoardMembers } from '@/services/board/member';
import { BoardGlobalProps, withBoard } from '@/hocs';
import MembersView from './view';

function Members({ boardId }: BoardGlobalProps) {
  const { data } = useQuery({
    queryKey: ['Board_Members'],
    queryFn: () => getBoardMembers(boardId),
    refetchOnWindowFocus: false,
  });

  return <MembersView members={data?.data} />;
}

export default withBoard(Members);
