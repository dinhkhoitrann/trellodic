import { externalRequest } from '@/services/request';

export const getBoardMembers = (boardId: string) => {
  return externalRequest.get(`/boards/${boardId}/members`);
};

export const inviteMembers = ({ signal, ...rest }: { memberIds: string[]; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', rest, { signal });
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
