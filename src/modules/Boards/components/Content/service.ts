import { generatePlaceholderCard } from '@/utils/card';
import { Column } from '@/types/column.type';

export const findColumnByCardId = (columns: Column[], cardId: string) => {
  return columns.find((column) => column.cards.map((card) => card._id).includes(cardId));
};

export const addPlaceholderCard = (columns: Column[]) => {
  return columns.map((column) => {
    if (column.cards.length === 0) {
      const placeholderCard = generatePlaceholderCard(column);
      return {
        ...column,
        cards: [placeholderCard],
        orderedCardIds: [placeholderCard._id],
      };
    }
    return { ...column };
  });
};
