/* eslint-disable indent */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  addChecklist,
  createChecklistItem,
  deleteChecklist,
  deleteChecklistItem,
  editChecklistName,
  editChecklistItem,
} from '@/services/card/checklist';

export const checklistApi = createApi({
  reducerPath: 'checklistApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Checklist'],
  endpoints: (builder) => ({
    createChecklist: builder.mutation<{ data: any }, { name: string; cardId: string; onSuccess?: () => void }>({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await addChecklist({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteChecklist: builder.mutation<{ data: any }, { checklistId: string; cardId: string; onSuccess?: () => void }>({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await deleteChecklist({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    updateChecklistName: builder.mutation<
      { data: any },
      { checklistId: string; name: string; cardId: string; onSuccess?: () => void }
    >({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await editChecklistName({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteChecklistItem: builder.mutation<
      { data: any },
      { itemId: string; checklistId: string; cardId: string; onSuccess?: () => void }
    >({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await deleteChecklistItem({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    updateChecklistItem: builder.mutation<
      { data: any },
      {
        itemId: string;
        title?: string;
        isDone?: boolean;
        checklistId: string;
        cardId: string;
        onSuccess?: () => void;
      }
    >({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({
        data: await editChecklistItem({ ...rest, signal }),
      }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    addChecklistItem: builder.mutation<
      { data: any },
      { title: string; checklistId: string; cardId: string; onSuccess?: () => void }
    >({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await createChecklistItem({ ...rest, signal }) }),
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
  useUpdateChecklistNameMutation,
  useDeleteChecklistItemMutation,
  useUpdateChecklistItemMutation,
  useAddChecklistItemMutation,
} = checklistApi;
