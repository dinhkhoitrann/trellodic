import { UserProfileFormValues } from './../../../modules/Profile/components/Detail/validation';
import { addSkills, editProfile, getUser, removeSkill } from '@/services/user';
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
    updateProfile: builder.mutation<
      { data: any },
      Partial<UserProfileFormValues> & { userId: string; avatar?: string }
    >({
      queryFn: async (args, { signal }) => {
        const { userId, ...rest } = args;
        return { data: await editProfile({ ...rest, signal }) };
      },
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
    addSkills: builder.mutation<{ data: any }, { userId: string; skills: string[] }>({
      queryFn: async ({ userId, ...rest }, { signal }) => ({ data: await addSkills({ ...rest, signal }) }),
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
    removeSkill: builder.mutation<{ data: any }, { userId: string; skill: string }>({
      queryFn: async ({ userId, ...rest }, { signal }) => ({ data: await removeSkill({ ...rest, signal }) }),
      invalidatesTags: (_result, _error, { userId }) => [{ type: 'User', id: userId }],
    }),
  }),
});

export const { usePrefetch, useUpdateProfileMutation, useAddSkillsMutation, useRemoveSkillMutation } = userApi;
