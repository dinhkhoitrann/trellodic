import { externalRequest } from '../../request';

export const editDueDates = async (data: { dueDate: Date; cardId: string; boardId: string }) => {
  return externalRequest.post('/posts', data);
};
