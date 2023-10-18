/* eslint-disable indent */
import { editDueDates, markCardIsDone } from '@/services/card/dates';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const datesApi = createApi({
  reducerPath: 'datesApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Dates'],
  endpoints: (builder) => ({
    editDueDate: builder.mutation<
      void,
      {
        startDate: Date;
        endDate: Date;
        cardId: string;
        boardId: string;
        onSuccess?: () => void;
      }
    >({
      queryFn: (args, { signal }) => editDueDates({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    markCardIsDone: builder.mutation<
      void,
      { cardId: string; boardId: string; isDone: boolean; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => markCardIsDone({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useEditDueDateMutation, useMarkCardIsDoneMutation } = datesApi;
