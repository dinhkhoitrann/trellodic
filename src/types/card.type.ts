import { Label } from './board.type';

export interface Card {
  readonly _id: string;
  boardId: string;
  columnId: string;
  title?: string;
  description?: string;
  cover?: string;
  memberIds?: string[];
  comments?: string[]; // TODO: define Comment interface
  attachments?: string[];
  labels?: Label[];
  FE_isPlaceholderCard?: true;
}
