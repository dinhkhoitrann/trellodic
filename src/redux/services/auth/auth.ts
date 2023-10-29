/* eslint-disable indent */
import Cookies from 'js-cookie';
import { login, signup } from '@/services/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<
      { data: { accessToken: string; refreshToken: string } },
      { email: string; password: string; onSuccess: () => void }
    >({
      queryFn: (args, { signal }) => login({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        const {
          data: {
            data: { accessToken, refreshToken },
          },
        } = await queryFulfilled;
        Cookies.set('token', accessToken);
        Cookies.set('refreshToken', refreshToken);
        onSuccess();
      },
    }),
    signup: builder.mutation<
      void,
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
      queryFn: (args, { signal }) => signup({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess();
      },
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
