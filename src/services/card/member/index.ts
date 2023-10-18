import { externalRequest } from '@/services/request';

export const addMembers = async (data: {
  cardId: string;
  boardId: string;
  memberIds: string[];
  signal: AbortSignal;
}) => {
  return externalRequest.post('/posts', data);
};
