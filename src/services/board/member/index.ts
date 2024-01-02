import { externalRequest } from '@/services/request';

export const getBoardMembers = async ({ boardId, signal }: { boardId: string; signal: AbortSignal }) => {
  const { data } = await externalRequest.get(`/boards/${boardId}/members`, { signal });
  return data;
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
  return externalRequest.patch(`/boards/${boardId}/members`, rest, { signal });
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
