import { externalRequest } from '@/services/request';

export const uploadAttachments = (data: { files: File[]; boardId: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.post('/posts', data);
};
