/* eslint-disable indent */
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import { login, signup } from '@/services/auth';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Auth'],
  endpoints: (builder) => ({
    login: builder.mutation<AxiosResponse<any, any>, { email: string; password: string; onSuccess: () => void }>({
      queryFn: async (args, { signal }) => ({ data: await login({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        const { data: responseData } = await queryFulfilled;
        const { accessToken, refreshToken } = responseData.data.data;
        Cookies.set('token', accessToken);
        Cookies.set('refreshToken', refreshToken);
        onSuccess();
      },
    }),
    signup: builder.mutation<
      AxiosResponse<any, any>,
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
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
