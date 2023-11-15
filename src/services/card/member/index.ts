import { externalRequest } from '@/services/request';

export const addMembers = (data: { cardId: string; boardId: string; memberIds: string[]; signal: AbortSignal }) => {
  return externalRequest.post('/posts', data);
};
