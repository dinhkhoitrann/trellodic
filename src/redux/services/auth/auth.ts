/* eslint-disable indent */
import { login, loginWithGoogle, signup } from '@/services/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '@/types/user.type';
import { saveAuthToken } from './util';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<
      { data: { accessToken: string; refreshToken: string; user: User } },
      { email: string; password: string; onSuccess: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await login({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        const { data: responseData } = await queryFulfilled;
        saveAuthToken(responseData);
        onSuccess();
      },
    }),
    signup: builder.mutation<
      { data: any },
      {
        email: string;
        name: string;
        password: string;
        confirmPassword: string;
        phoneNumber: string;
        birthday: string;
        onSuccess: () => void;
      }
    >({
      queryFn: async (args, { signal }) => ({ data: await signup({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess();
      },
    }),
    loginWithGoogle: builder.mutation<
      { data: { accessToken: string; refreshToken: string; user: User } },
      { code: string; onSuccess: () => void }
    >({
      queryFn: async (args) => ({ data: await loginWithGoogle({ code: args.code }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        const { data: responseData } = await queryFulfilled;
        saveAuthToken(responseData);
        onSuccess();
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useLoginWithGoogleMutation } = authApi;
