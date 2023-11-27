import { externalRequest } from '@/services/request';

export const uploadAttachments = ({ signal, formData }: { formData: FormData; signal: AbortSignal }) => {
  return externalRequest.post('/upload/s3', formData, {
    signal,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const addAttachment = ({
  cardId,
  ...rest
}: {
  cardId: string;
  filename: string;
  extension: string;
  url: string;
}) => {
  return externalRequest.post(`/cards/${cardId}/attachments`, rest);
};

export const deleteAttachment = ({
  cardId,
  attachmentId,
  signal,
}: {
  attachmentId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete(`/cards/${cardId}/attachments/${attachmentId}`, {
    signal: signal,
  });
};
