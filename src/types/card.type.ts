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
  FE_isPlaceholderCard?: true;
}
