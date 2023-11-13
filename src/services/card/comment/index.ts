import { externalRequest } from '@/services/request';

export const addComment = async (data: { content: string; boardId: string; cardId: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  const res = await externalRequest.post('/posts', rest, { signal });
  return res.data;
};

export const editComment = async (data: {
  content: string;
  commentId: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  const { signal, ...rest } = data;
  const res = await externalRequest.post('/posts', rest, { signal });
  return res.data;
};

export const deleteComment = async (data: {
  commentId: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.delete('/posts/1', { signal: data.signal });
  return res.data;
};
