import { externalRequest } from '@/services/request';

export const uploadAttachments = async ({ signal, formData }: { formData: FormData; signal: AbortSignal }) => {
  return externalRequest.post('/upload/s3', formData, {
    signal,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deleteAttachment = async (data: {
  attachmentId: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete('https://jsonplaceholder.typicode.com/posts/1', {
    signal: data.signal,
  });
};
