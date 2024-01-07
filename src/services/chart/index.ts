import { externalRequest } from '../request';

export const getTaskStatusChartData = async ({ boardId, signal }: { boardId: string; signal: AbortSignal }) => {
  const { data } = await externalRequest.get(`/boards/${boardId}/statistic/task-status-by-assignee`, { signal });
  return data;
};

export const getTasksCountByColumn = async ({ boardId, signal }: { boardId: string; signal: AbortSignal }) => {
  const { data } = await externalRequest.get(`/boards/${boardId}/statistic/task-status-by-column`, { signal });
  return data;
};

export const getPercentageTaskStatus = async ({ boardId, signal }: { boardId: string; signal: AbortSignal }) => {
  const { data } = await externalRequest.get(`/boards/${boardId}/statistic/percentage-of-task-status`, { signal });
  return data;
};
