export interface SearchResults {
  cards: CardResult[];
  boards: BoardResult[];
  workspaces: WorkspaceResult[];
}

export interface CardResult {
  readonly _id: string;
  boardId: string;
  boardTitle: string;
  cardTitle: string;
  cardCover?: string;
}

export interface BoardResult {
  readonly _id: string;
  boardCover?: string;
  boardTitle: string;
  workspaceTitle: string;
}

export interface WorkspaceResult {
  readonly _id: string;
  workspaceTitle: string;
  workspaceImage?: string;
}
