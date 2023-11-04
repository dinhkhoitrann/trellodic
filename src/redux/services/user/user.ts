import { getUser } from '@/services/user';
import { User } from '@/types/user.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builders) => ({
    getUser: builders.query<{ user: User }, { accessToken: string }>({
      queryFn: (args, { signal }) => getUser({ ...args, signal }),
    }),
  }),
});

export const { usePrefetch } = userApi;
