import { Label } from './board.type';
import { User } from './user.type';

export interface Card {
  readonly _id: string;
  boardId: string;
  columnId: string;
  title?: string;
  description?: string;
  cover?: string;
  memberIds?: User[];
  comments?: Comment[];
  checklists?: Checklist[];
  attachments?: string[];
  labels?: Label[];
  startDate?: Date;
  endDate?: Date;
  isDone?: boolean;
  FE_isPlaceholderCard?: true;
}

export interface ChecklistItem {
  readonly _id: string;
  title: string;
  isDone: boolean;
}

export interface Checklist {
  readonly _id: string;
  name: string;
  items: ChecklistItem[];
}

export interface Comment {
  readonly _id: string;
  avatarUrl?: string;
  username: string;
  createdAt: Date;
  updatedAt?: Date;
  content: string;
}
