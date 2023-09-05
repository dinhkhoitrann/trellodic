'use client';
import BoardBar from '../Bar';
import BoardContent from '../Content';
import { mockData } from '@/apis/mock-data';

function Board() {
  return (
    <>
      <BoardBar board={mockData.board} />
      <BoardContent board={mockData.board} />
    </>
  );
}

export default Board;
