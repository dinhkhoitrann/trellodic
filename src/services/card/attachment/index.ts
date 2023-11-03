import { externalRequest } from '@/services/request';

export const uploadAttachments = (data: { formData: FormData; signal: AbortSignal }) => {
  const { signal, formData } = data;

  return externalRequest.post('http://localhost:8080/api/v1/upload/s3', formData, {
    signal,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
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
