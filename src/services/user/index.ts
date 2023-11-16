import { mockUser } from '@/apis/mock-data';
import { externalRequest } from '../request';
import { UserProfileFormValues } from '@/modules/Profile/components/Detail/validation';

export const getUser = async (data: { accessToken: string; signal?: AbortSignal }) => {
  await externalRequest.get('https://jsonplaceholder.typicode.com/posts', {
    signal: data.signal,
  });
  return { data: { user: mockUser } };
};

export const editAvatar = ({ avatarUrl, signal }: { avatarUrl: string; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', { avatarUrl }, { signal });
};

export const editProfile = ({ signal, ...rest }: Partial<UserProfileFormValues> & { signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', rest, { signal });
};
