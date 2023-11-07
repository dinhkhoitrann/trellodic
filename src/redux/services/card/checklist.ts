/* eslint-disable indent */
import { AxiosResponse } from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  addChecklist,
  createChecklistItem,
  deleteChecklist,
  deleteChecklistItem,
  editChecklistTitle,
  editTitleChecklistItem,
  markChecklistItemIsDone,
} from '@/services/card/checklist';

export const checklistApi = createApi({
  reducerPath: 'checklistApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Checklist'],
  endpoints: (builder) => ({
    createChecklist: builder.mutation<
      AxiosResponse<any, any>,
      { checklistTitle: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await addChecklist({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteChecklist: builder.mutation<
      AxiosResponse<any, any>,
      { checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await deleteChecklist({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    updateChecklistTitle: builder.mutation<
      AxiosResponse<any, any>,
      { checklistId: string; updatedTitle: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await editChecklistTitle({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    markChecklistItemDone: builder.mutation<
      AxiosResponse<any, any>,
      { itemId: string; checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await markChecklistItemIsDone({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteChecklistItem: builder.mutation<
      AxiosResponse<any, any>,
      { itemId: string; checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await deleteChecklistItem({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    updateTitleChecklistItem: builder.mutation<
      AxiosResponse<any, any>,
      { itemId: string; title: string; checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await editTitleChecklistItem({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    addChecklistItem: builder.mutation<
      AxiosResponse<any, any>,
      { title: string; checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: async (args, { signal }) => ({ data: await createChecklistItem({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const {
  useCreateChecklistMutation,
  useDeleteChecklistMutation,
  useUpdateChecklistTitleMutation,
  useMarkChecklistItemDoneMutation,
  useDeleteChecklistItemMutation,
  useUpdateTitleChecklistItemMutation,
  useAddChecklistItemMutation,
} = checklistApi;
