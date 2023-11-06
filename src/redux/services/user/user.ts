import { editAvatar, getUser } from '@/services/user';
import { User } from '@/types/user.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builders) => ({
    getUser: builders.query<{ user: User }, { accessToken: string }>({
      queryFn: (args, { signal }) => getUser({ ...args, signal }),
      providesTags: (result) => [{ type: 'User', id: result?.user._id }],
    }),
    updateAvatar: builders.mutation<void, { userId: string; avatarUrl: string }>({
      queryFn: (args, { signal }) => editAvatar({ avatarUrl: args.avatarUrl, signal }),
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
  }),
});

export const { usePrefetch, useUpdateAvatarMutation } = userApi;
