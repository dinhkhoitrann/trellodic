import { externalRequest } from '../request';
import { UserProfileFormValues } from '@/modules/Profile/components/Detail/validation';

export const getUser = async (data?: { signal?: AbortSignal }) => {
  const response = await externalRequest.get('/users/me', {
    signal: data?.signal,
  });
  return response.data;
};

export const editProfile = ({
  signal,
  ...rest
}: Partial<UserProfileFormValues> & { signal: AbortSignal; avatar?: string }) => {
  return externalRequest.patch('/users/me', rest, { signal });
};
