import { Board } from './board.type';

export interface Workspace {
  readonly _id: string;
  name: string;
  image?: string;
  boards: Partial<Board>[];
  ownerUserId: string;
  createdAt?: string;
  updatedAt?: string;
}
