import { Board } from './board.type';
import { User } from './user.type';

export interface Workspace {
  readonly _id: string;
  name: string;
  image?: string;
  memberIds?: Partial<User>[] | string[];
  boards?: Partial<Board>[];
  ownerUserId: string;
  createdAt?: string;
  updatedAt?: string;
}
