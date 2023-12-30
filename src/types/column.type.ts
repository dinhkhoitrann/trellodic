import { Card } from './card.type';

export interface Column {
  readonly _id: string;
  boardId: string;
  title: string;
  orderedCardIds: string[];
  cards: Card[]; // add new interface CardInColumn
}

export interface CardInColumn {
  readonly _id: string;
  boardId: string;
  columnId: string;
  title?: string;
  cover?: string;
  memberCount: number;
  commentCount: number;
  attachmentCount: number;
}
