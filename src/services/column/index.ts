import { externalRequest } from '../request';

export const addColumn = (data: { title: string; boardId: string }) => {
  return externalRequest.post(`/columns`, data);
};
