/* eslint-disable indent */
import { AxiosResponse } from 'axios';
import { addLabelToCard, createLabel, editLabel } from '@/services/board/label';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const labelApi = createApi({
  reducerPath: 'labelApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Label'],
  endpoints: (builder) => ({
    addLabel: builder.mutation<
      AxiosResponse<any, any>,
      { title: string; color: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await createLabel({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    editLabel: builder.mutation<
      AxiosResponse<any, any>,
      { title: string; color: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await editLabel({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    addLabelToCard: builder.mutation<
      AxiosResponse<any, any>,
      {
        labelId: string;
        cardId: string;
        isAdded: boolean;
        onSuccess?: () => void;
      }
    >({
      queryFn: async (args, { signal }) => ({ data: await addLabelToCard({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useAddLabelMutation, useEditLabelMutation, useAddLabelToCardMutation } = labelApi;
