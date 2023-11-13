import { externalRequest } from '@/services/request';

export const uploadAttachments = async (data: { formData: FormData; signal: AbortSignal }) => {
  const { signal, formData } = data;
  const res = await externalRequest.post('http://localhost:8080/api/v1/upload/s3', formData, {
    signal,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return res.data;
};

export const deleteAttachment = async (data: {
  attachmentId: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.delete('/posts/1', {
    signal: data.signal,
  });
  return res.data;
};
