/* eslint-disable indent */
import { addLabelToCard, createLabel, editLabel } from '@/services/board/label';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const labelApi = createApi({
  reducerPath: 'labelApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Label'],
  endpoints: (builder) => ({
    addLabel: builder.mutation<
      void,
      { title: string; color: string; boardId: string; onSuccess?: () => void; onFailed?: (_errorMsg: string) => void }
    >({
      queryFn: (args, { signal }) => createLabel({ ...args, signal }),
      onQueryStarted: async ({ onSuccess, onFailed }, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          onSuccess && onSuccess();
        } catch (error) {
          onFailed && onFailed((error as Error).message);
        }
      },
    }),
    editLabel: builder.mutation<
      void,
      { title: string; color: string; boardId: string; onSuccess?: () => void; onFailed?: (_errorMsg: string) => void }
    >({
      queryFn: (args, { signal }) => editLabel({ ...args, signal }),
      onQueryStarted: async ({ onSuccess, onFailed }, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          onSuccess && onSuccess();
        } catch (error) {
          onFailed && onFailed((error as Error).message);
        }
      },
    }),
    addLabelToCard: builder.mutation<
      void,
      {
        labelId: string;
        cardId: string;
        isAdded: boolean;
        onSuccess?: () => void;
        onFailed?: (_errorMsg: string) => void;
      }
    >({
      queryFn: (args, { signal }) => addLabelToCard({ ...args, signal }),
      onQueryStarted: async ({ onSuccess, onFailed }, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          onSuccess && onSuccess();
        } catch (error) {
          onFailed && onFailed((error as Error).message);
        }
      },
    }),
  }),
});

export const { useAddLabelMutation, useEditLabelMutation, useAddLabelToCardMutation } = labelApi;
