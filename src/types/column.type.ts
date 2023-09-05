import { Card } from './card.type';

export interface Column {
  readonly _id: string;
  boardId: string;
  title: string;
  cardOrderIds: string[];
  cards: Card[];
}
