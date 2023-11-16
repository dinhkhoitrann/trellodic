import { externalRequest } from '@/services/request';

export const addMembers = (data: { cardId: string; boardId: string; memberIds: string[]; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};
