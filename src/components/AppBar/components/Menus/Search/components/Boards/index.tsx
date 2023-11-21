import { useRouter } from 'next/navigation';
import { BoardResult } from '@/types/search.type';
import BoardsView from './view';

type BoardsProps = {
  boards: BoardResult[] | undefined;
};

function Boards({ boards }: BoardsProps) {
  const router = useRouter();

  const handleViewBoard = (boardId: string) => {
    router.push(`/boards/${boardId}`);
  };

  return <BoardsView boards={boards} onViewBoard={handleViewBoard} />;
}

export default Boards;
