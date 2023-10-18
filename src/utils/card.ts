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

export const isInvalidFile = (files: File[], selectedFile: File) => {
  return files.some(
    (file) => file.name === selectedFile.name && file.size === selectedFile.size && file.type === selectedFile.type,
  );
};

export const isExpired = (timestamp?: string) => {
  if (!timestamp) return false;
  return moment(timestamp).isBefore(moment());
};
