import { Column } from '@/types/column.type';

export const mapColumnsToSubmit = (columns: Column[]) => {
  return columns.map((column) => ({
    name: column.title,
    todos: column.cards.map((card) => ({
      title: card.title,
      dueDate: card.endDate?.toLocaleDateString(),
      isDone: card.isDone,
    })),
  }));
};
