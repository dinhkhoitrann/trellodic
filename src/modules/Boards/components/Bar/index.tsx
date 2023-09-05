import { Board } from '@/types/board.type';
import BoardBarView from './view';

type BoardBarProps = {
  board: Board;
};

function BoardBar({ board }: BoardBarProps) {
  return <BoardBarView board={board} />;
}

export default BoardBar;
