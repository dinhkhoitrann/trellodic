import { Board } from './board.type';
import { Card } from './card.type';
import { Workspace } from './workspace.type';

export interface SearchResults {
  cards: Card[];
  boards: Board[];
  workspaces: Workspace[];
}
