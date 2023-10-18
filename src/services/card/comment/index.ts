import { externalRequest } from '@/services/request';

export const addComment = async (data: { content: string; boardId: string; cardId: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  return externalRequest.post('/posts', rest, { signal });
};

export const editComment = async (data: {
  content: string;
  commentId: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  const { signal, ...rest } = data;
  return externalRequest.post('/posts', rest, { signal });
};

export const deleteComment = async (data: {
  commentId: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete('/posts/1', { signal: data.signal });
};
