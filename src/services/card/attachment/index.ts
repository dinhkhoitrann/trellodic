import { externalRequest } from '@/services/request';

export const uploadAttachments = (data: { files: File[]; boardId: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.post('/posts', data);
};

export const deleteAttachment = (data: {
  attachmentId: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete('/posts/1', {
    signal: data.signal,
  });
};
