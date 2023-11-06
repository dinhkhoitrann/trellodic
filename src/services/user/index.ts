import { mockUser } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const getUser = async (data: { accessToken: string; signal: AbortSignal }) => {
  await externalRequest.get('/posts', {
    signal: data.signal,
  });
  return { data: { user: mockUser } };
};

export const editAvatar = async (data: { avatarUrl: string; signal: AbortSignal }) => {
  const { avatarUrl, signal } = data;
  return externalRequest.post('/posts', { avatarUrl }, { signal });
};
