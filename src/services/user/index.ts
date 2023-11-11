import { mockUser } from '@/apis/mock-data';
import { externalRequest } from '../request';
import { UserProfileFormValues } from '@/modules/Profile/components/Detail/validation';

export const getUser = async (data: { accessToken: string; signal?: AbortSignal }) => {
  await externalRequest.get('/posts', {
    signal: data.signal,
  });
  return { data: { user: mockUser } };
};

export const editAvatar = async (data: { avatarUrl: string; signal: AbortSignal }) => {
  const { avatarUrl, signal } = data;
  const res = await externalRequest.post('/posts', { avatarUrl }, { signal });
  return res.data;
};

export const editProfile = async (data: Partial<UserProfileFormValues> & { signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  const res = await externalRequest.post('/posts', rest, { signal });
  return res.data;
};
