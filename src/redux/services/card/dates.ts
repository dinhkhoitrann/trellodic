/* eslint-disable indent */
import { AxiosResponse } from 'axios';
import { editDueDates, markCardIsDone } from '@/services/card/dates';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const datesApi = createApi({
  reducerPath: 'datesApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Dates'],
  endpoints: (builder) => ({
    editDueDate: builder.mutation<
      AxiosResponse<any, any>,
      {
        startDate: Date;
        endDate: Date;
        cardId: string;
        boardId: string;
        onSuccess?: () => void;
      }
    >({
      queryFn: async (args, { signal }) => ({ data: await editDueDates({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    markCardIsDone: builder.mutation<
      AxiosResponse<any, any>,
      { cardId: string; boardId: string; isDone: boolean; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await markCardIsDone({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useEditDueDateMutation, useMarkCardIsDoneMutation } = datesApi;
