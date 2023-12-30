import { Column } from './column.type';
import { User } from './user.type';

export interface Board {
  readonly _id: string;
  workspaceId: string;
  name: string;
  description: string;
  type?: string;
  adminId: string; // admin
  memberIds: User[]; //members: [{_id, name, avatar}] consists of admin
  orderedColumnIds: string[];
  columns: Column[];
  labels?: Label[];
}

export interface Label {
  readonly _id: string;
  title: string;
  color: string;
  isSelected?: boolean;
}
