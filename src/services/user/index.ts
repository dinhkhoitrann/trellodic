import { externalRequest } from '../request';
import { UserProfileFormValues } from '@/modules/Profile/components/Detail/validation';

export const getUser = async (data?: { signal?: AbortSignal }) => {
  const response = await externalRequest.get('/users/me', {
    signal: data?.signal,
  });
  return response.data;
};

export const editAvatar = ({ avatarUrl, signal }: { avatarUrl: string; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', { avatarUrl }, { signal });
};

export const editProfile = ({ signal, ...rest }: Partial<UserProfileFormValues> & { signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', rest, { signal });
};
