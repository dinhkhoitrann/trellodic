import { externalRequest } from '../../request';

export const createLabel = (data: { title: string; color: string; boardId: string; signal: AbortSignal }) => {
  return externalRequest.post(`/api/boards/${data.boardId}/label`, data);
};

export const editLabel = (data: { title: string; color: string; boardId: string; signal: AbortSignal }) => {
  return externalRequest.put(`/api/boards/${data.boardId}/label`, data);
};
