import { Board } from '@/types/board.type';
import { Workspace } from '@/types/workspace.type';

export const getBoardsForSections = (workspace: Partial<Workspace>, ownerId?: string) => {
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
