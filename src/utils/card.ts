import { Card } from '@/types/card.type';
import { Column } from '@/types/column.type';

export const generatePlaceholderCard = (column: Column): Card => {
  return {
    _id: `${column._id}-placeholder-card`,
    boardId: column.boardId,
    columnId: column._id,
    FE_isPlaceholderCard: true,
  };
};
