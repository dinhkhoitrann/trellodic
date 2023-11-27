import { useRouter } from 'next/navigation';
import { BoardResult } from '@/types/search.type';
import BoardsView from './view';

type BoardsProps = {
  boards: BoardResult[] | undefined;
  onCloseResult: () => void;
};

function Boards({ boards, onCloseResult }: BoardsProps) {
  const router = useRouter();

  const handleViewBoard = (boardId: string) => {
    onCloseResult();
    router.push(`/boards/${boardId}`);
  };

  return <BoardsView boards={boards} onViewBoard={handleViewBoard} />;
}

export default Boards;
