import { externalRequest } from '../../request';

export const createLabel = (data: { title: string; color: string; boardId: string; signal: AbortSignal }) => {
  return externalRequest.post('/posts', data);
};

export const editLabel = (data: { title: string; color: string; boardId: string; signal: AbortSignal }) => {
  return externalRequest.put('/posts/1', data);
};

export const addLabelToCard = (data: { labelId: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.post('/posts', data);
};
