import { externalRequest } from '@/services/request';

export const getBoardMembers = (boardId: string) => {
  return externalRequest.get(`/boards/${boardId}/members`);
};

export const inviteMembers = (data: { memberIds: string[] }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};
