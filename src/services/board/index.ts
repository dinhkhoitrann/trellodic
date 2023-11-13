import { mockData } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const fetchBoardDetails = async (data: { boardId: string; signal?: AbortSignal }) => {
  await externalRequest.get(`/posts`, {
    signal: data.signal,
  });

  return mockData.board;
};

export const inviteMembers = async (data: { memberIds: string[] }) => {
  const res = await externalRequest.post('/posts', data);
  return res.data;
};
