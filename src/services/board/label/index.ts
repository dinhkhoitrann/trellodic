import { externalRequest } from '../../request';

export const createLabel = async (data: { title: string; color: string; boardId: string; signal: AbortSignal }) => {
  const res = await externalRequest.post('/posts', data);
  return res.data;
};

export const editLabel = async (data: { title: string; color: string; boardId: string; signal: AbortSignal }) => {
  const res = await externalRequest.put('/posts/1', data);
  return res.data;
};

export const addLabelToCard = async (data: { labelId: string; cardId: string; signal: AbortSignal }) => {
  const res = await externalRequest.post('/posts', data);
  return res.data;
};
