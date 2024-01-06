import { useRouter } from 'next/navigation';
import { Board } from '@/types/board.type';
import BoardsView from './view';

type BoardsProps = {
  boards: Board[] | undefined;
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
