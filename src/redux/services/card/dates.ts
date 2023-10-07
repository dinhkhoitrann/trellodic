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
        onFailed?: (_errMsg: string) => void;
      }
    >({
      queryFn: (args, { signal }) => editDueDates({ ...args, signal }),
      onQueryStarted: async ({ onSuccess, onFailed }, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          onSuccess && onSuccess();
        } catch (error) {
          onFailed && onFailed((error as Error).message);
        }
      },
    }),
    markCardIsDone: builder.mutation<
      void,
      { cardId: string; boardId: string; isDone: boolean; onSuccess?: () => void; onFailed?: (_errMsg: string) => void }
    >({
      queryFn: (args, { signal }) => markCardIsDone({ ...args, signal }),
      onQueryStarted: async ({ onSuccess, onFailed }, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          onSuccess && onSuccess();
        } catch (error) {
          onFailed && onFailed('Something went wrong');
        }
      },
    }),
  }),
});

export const { useEditDueDateMutation, useMarkCardIsDoneMutation } = datesApi;
