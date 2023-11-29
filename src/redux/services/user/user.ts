import { UserProfileFormValues } from './../../../modules/Profile/components/Detail/validation';
import { editAvatar, editProfile, getUser } from '@/services/user';
import { User } from '@/types/user.type';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['User'],
  endpoints: (builder) => ({
    getUser: builder.query<User, void>({
      queryFn: async (_, { signal }) => {
        const user = await getUser({ signal });
        return { data: user };
      },
      providesTags: (result) => [{ type: 'User', id: result?._id }],
    }),
    updateAvatar: builder.mutation<{ data: any }, { userId: string; avatarUrl: string }>({
      queryFn: async (args, { signal }) => ({ data: await editAvatar({ avatarUrl: args.avatarUrl, signal }) }),
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
    updateProfile: builder.mutation<{ data: any }, Partial<UserProfileFormValues> & { userId: string }>({
      queryFn: async (args, { signal }) => {
        const { userId, ...rest } = args;
        return { data: await editProfile({ ...rest, signal }) };
      },
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
  }),
});

export const { usePrefetch, useUpdateAvatarMutation, useUpdateProfileMutation } = userApi;
