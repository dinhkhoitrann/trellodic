import { Board } from '@/types/board.type';
import { Workspace } from '@/types/workspace.type';

export const getBoardsForSections = (ownerId: string, workspace: Partial<Workspace>) => {
  const ownerBoards: Partial<Board>[] = [];
  const otherBoards: Partial<Board>[] = [];

  workspace?.boards?.forEach((board) => {
    if (board.admin === ownerId) {
      ownerBoards.push(board);
    } else {
      otherBoards.push(board);
    }
  });

  return {
    ownerBoards,
    otherBoards,
  };
};
