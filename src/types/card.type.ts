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
  attachments?: Attachment[];
  labels?: Label[];
  startDate?: string;
  endDate?: string;
  isDone?: boolean;
  createdAt?: string;
  updatedAt?: string;
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
  createdAt: string;
  updatedAt?: string;
  content: string;
}

export interface Attachment {
  readonly _id: string;
  url: string;
  fileName: string;
  extension: string;
  createdTime: string;
}
