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

export const deleteComment = ({
  cardId,
  commentId,
  signal,
}: {
  commentId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete(`/cards/${cardId}/comments/${commentId}`, { signal });
};
