import { filteredBoard } from '@/apis/mock-data';
import { Board } from '@/types/board.type';

export const filterBoard = (data: { boardId: string; labels?: string[]; signal: AbortSignal }): Promise<Board> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(filteredBoard);
    }, 500);
  });
};
