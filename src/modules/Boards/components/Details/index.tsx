'use client';
import { Board as BoardType } from '@/types/board.type';
import BoardContent from '../Content';

type BoardProps = {
  board: BoardType;
};

function Board({ board }: BoardProps) {
  return <BoardContent board={board} />;
}

export default Board;
