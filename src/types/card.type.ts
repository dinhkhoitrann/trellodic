import { Label } from './board.type';
import { User } from './user.type';

export interface Card {
  readonly _id: string;
  boardId: string;
  columnId: string;
  title?: string;
  description?: string;
  cover?: string;
  members?: User[];
  comments?: Comment[];
  checklists?: Checklist[];
  attachments?: Attachment[];
  labels?: Label[];
  skills?: string[];
  startDate?: string;
  endDate?: string;
  isDone?: boolean;
  commentCount?: number;
  attachmentCount?: number;
  memberCount?: number;
  createdAt?: string;
  updatedAt?: string;
  FE_isPlaceholderCard?: boolean;
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
  author: {
    readonly _id: string;
    name: string;
    avatar: string;
  };
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
