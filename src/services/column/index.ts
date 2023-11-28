import { externalRequest } from '../request';

export const addColumn = (data: { title: string; boardId: string }) => {
  return externalRequest.post(`/columns`, data);
};

export const deleteColumn = ({ columnId }: { columnId: string }) => {
  return externalRequest.delete(`/columns/${columnId}`);
};
