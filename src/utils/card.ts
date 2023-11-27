import moment from 'moment';
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

export const isValidFile = (file: File, extensions: string[]) => {
  const extension = file.name.split('.').pop();
  if (!extension) return false;
  return extensions.includes(extension);
};

export const isExpired = (timestamp?: string) => {
  if (!timestamp) return false;
  return moment(timestamp).isBefore(moment());
};
