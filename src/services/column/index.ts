import { externalRequest } from '../request';

export const addColumn = (data: { title: string; boardId: string }) => {
  return externalRequest.post(`/columns`, { ...data, boardId: '6566eca44f3cc86fadda52db' });
};

export const deleteColumn = ({ columnId }: { columnId: string }) => {
  return externalRequest.delete(`/columns/${columnId}`);
};

export const updateColumn = ({
  columnId,
  ...rest
}: {
  columnId: string;
  title?: string;
  orderedCardIds?: string[];
}) => {
  return externalRequest.patch(`/columns/${columnId}`, rest);
};
