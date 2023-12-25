import { externalRequest } from '@/services/request';

export const addComment = ({ cardId, signal, ...rest }: { content: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.post(`/cards/${cardId}/comments`, rest, { signal });
};

export const editComment = ({
  cardId,
  commentId,
  signal,
  ...rest
}: {
  content: string;
  commentId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/cards/${cardId}/comments/${commentId}`, rest, { signal });
};

export const deleteComment = (data: { commentId: string; boardId: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.delete('https://jsonplaceholder.typicode.com/posts/1', { signal: data.signal });
};
