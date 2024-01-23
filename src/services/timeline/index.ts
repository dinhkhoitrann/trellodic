import { externalRequest } from '../request';

export const getBoardTimeline = async ({ boardId, signal }: { boardId: string; signal: AbortSignal }) => {
  const { data } = await externalRequest.get(`/boards/${boardId}/statistic/timeline`, { signal });
  return data;
};

export const getWorkspaceTimeline = async ({ workspaceId, signal }: { workspaceId: string; signal: AbortSignal }) => {
  const { data } = await externalRequest.get(`/workspaces/${workspaceId}/statistic/timeline`, { signal });
  return data;
};
