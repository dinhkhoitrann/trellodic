import { externalRequest } from '../request';

export const addColumn = (data: { columnTitle: string; boardId: string }) => {
  return externalRequest.post('/posts', data);
};
