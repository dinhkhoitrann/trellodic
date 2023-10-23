import { externalRequest } from '@/services/request';
import { getHeaders } from '../../util';

export const uploadAttachments = (data: { formData: FormData; signal: AbortSignal }) => {
  const { signal, formData } = data;

  return externalRequest.post('http://localhost:8080/api/v1/upload/s3', formData, {
    signal,
    headers: {
      ...getHeaders(),
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
