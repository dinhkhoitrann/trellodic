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
    createChecklist: builder.mutation<void, { checklistTitle: string; cardId: string; boardId: string }>({
      queryFn: (args, { signal }) => addChecklist({ ...args, signal }),
    }),
    deleteChecklist: builder.mutation<void, { checklistId: string; cardId: string; boardId: string }>({
      queryFn: (args, { signal }) => deleteChecklist({ ...args, signal }),
    }),
    updateChecklistTitle: builder.mutation<
      void,
      { checklistId: string; updatedTitle: string; cardId: string; boardId: string }
    >({
      queryFn: (args, { signal }) => editChecklistTitle({ ...args, signal }),
    }),
    markChecklistItemDone: builder.mutation<
      void,
      { itemId: string; checklistId: string; cardId: string; boardId: string }
    >({
      queryFn: (args, { signal }) => markChecklistItemIsDone({ ...args, signal }),
    }),
    deleteChecklistItem: builder.mutation<
      void,
      { itemId: string; checklistId: string; cardId: string; boardId: string }
    >({
      queryFn: (args, { signal }) => deleteChecklistItem({ ...args, signal }),
    }),
    updateTitleChecklistItem: builder.mutation<
      void,
      { itemId: string; title: string; checklistId: string; cardId: string; boardId: string }
    >({
      queryFn: (args, { signal }) => editTitleChecklistItem({ ...args, signal }),
    }),
    addChecklistItem: builder.mutation<void, { title: string; checklistId: string; cardId: string; boardId: string }>({
      queryFn: (args, { signal }) => createChecklistItem({ ...args, signal }),
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
