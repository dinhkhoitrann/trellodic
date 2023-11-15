import { externalRequest } from '@/services/request';

export const addComment = ({
  signal,
  ...rest
}: {
  content: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/posts', rest, { signal });
};

export const editComment = ({
  signal,
  ...rest
}: {
  content: string;
  commentId: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/posts', rest, { signal });
};

export const deleteComment = (data: { commentId: string; boardId: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.delete('/posts/1', { signal: data.signal });
};
