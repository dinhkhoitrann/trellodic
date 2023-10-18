/* eslint-disable indent */
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
      void,
      { checklistTitle: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => addChecklist({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteChecklist: builder.mutation<
      void,
      { checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => deleteChecklist({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    updateChecklistTitle: builder.mutation<
      void,
      { checklistId: string; updatedTitle: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => editChecklistTitle({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    markChecklistItemDone: builder.mutation<
      void,
      { itemId: string; checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => markChecklistItemIsDone({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteChecklistItem: builder.mutation<
      void,
      { itemId: string; checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => deleteChecklistItem({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    updateTitleChecklistItem: builder.mutation<
      void,
      { itemId: string; title: string; checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => editTitleChecklistItem({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    addChecklistItem: builder.mutation<
      void,
      { title: string; checklistId: string; cardId: string; boardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => createChecklistItem({ ...args, signal }),
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
