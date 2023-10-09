import { Column } from './column.type';
import { User } from './user.type';

export interface Board {
  readonly _id: string;
  title: string;
  description: string;
  type: string;
  ownerIds: User[];
  memberIds: User[];
  columnOrderIds: string[];
  columns: Column[];
  labels?: Label[];
}

export interface Label {
  readonly _id: string;
  title: string;
  color: string;
  isSelected?: boolean;
}
