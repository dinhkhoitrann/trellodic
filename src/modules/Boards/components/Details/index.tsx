'use client';
import BoardContent from '../Content';
import { mockData } from '@/apis/mock-data';

function Board() {
  return <BoardContent board={mockData.board} />;
}

export default Board;
