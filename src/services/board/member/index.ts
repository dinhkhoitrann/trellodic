import { externalRequest } from '@/services/request';

export const getBoardMembers = (boardId: string) => {
  return externalRequest.get(`/boards/${boardId}/members`);
};

export const inviteMembers = (data: { memberIds: string[] }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};

export const removeMembers = ({
  boardId,
  memberId,
  signal,
}: {
  boardId: string;
  memberId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/boards/${boardId}/members/${memberId}`, {
    signal,
  });
};
