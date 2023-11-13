import { externalRequest } from '@/services/request';

export const addMembers = async (data: {
  cardId: string;
  boardId: string;
  memberIds: string[];
  signal: AbortSignal;
}) => {
  const res = await externalRequest.post('/posts', data);
  return res.data;
};
