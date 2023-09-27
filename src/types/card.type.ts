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
  checklists?: Checklist[];
  attachments?: string[];
  labels?: Label[];
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
