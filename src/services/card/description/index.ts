import { externalRequest } from '@/services/request';

export const editDescription = async (data: {
  content: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  const { signal, ...rest } = data;
  const res = await externalRequest.post('/posts', rest, {
    signal,
  });
  return res.data;
};
