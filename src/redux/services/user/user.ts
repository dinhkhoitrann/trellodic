import { AxiosResponse } from 'axios';
import { UserProfileFormValues } from './../../../modules/Profile/components/Detail/validation';
import { editAvatar, editProfile, getUser } from '@/services/user';
import { User } from '@/types/user.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<{ user: User }, { accessToken: string }>({
      queryFn: (args, { signal }) => getUser({ ...args, signal }),
      providesTags: (result) => [{ type: 'User', id: result?.user._id }],
    }),
    updateAvatar: builder.mutation<AxiosResponse<any, any>, { userId: string; avatarUrl: string }>({
      queryFn: async (args, { signal }) => ({ data: await editAvatar({ avatarUrl: args.avatarUrl, signal }) }),
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
    updateProfile: builder.mutation<AxiosResponse<any, any>, Partial<UserProfileFormValues> & { userId: string }>({
      queryFn: async (args, { signal }) => {
        const { userId, ...rest } = args;
        return { data: await editProfile({ ...rest, signal }) };
      },
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
  }),
});

export const { usePrefetch, useUpdateAvatarMutation, useUpdateProfileMutation } = userApi;
