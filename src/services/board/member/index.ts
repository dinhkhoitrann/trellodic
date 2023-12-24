import { externalRequest } from '@/services/request';

export const getBoardMembers = (boardId: string) => {
  return externalRequest.get(`/boards/${boardId}/members`);
};

export const inviteMembers = ({
  signal,
  boardId,
  ...rest
}: {
  userIds: string[];
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post(`/boards/${boardId}/members`, rest, { signal });
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
