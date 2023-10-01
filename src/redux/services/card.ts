import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Card } from '@/types/card.type';
import { fetchCard } from '@/services/card';
import {
  addChecklist,
  createChecklistItem,
  deleteChecklist,
  deleteChecklistItem,
  editChecklistTitle,
  editTitleChecklistItem,
  markChecklistItemIsDone,
} from '@/services/card/checklist';

export const cardApi = createApi({
  reducerPath: 'cardApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Card'],
  endpoints: (builder) => ({
    getCardDetails: builder.query<Card, { cardId: string; boardId: string }>({
      queryFn: async (args, { signal }) => {
        const card: Card = await fetchCard({ ...args, signal });
        return { data: card };
      },
      providesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
      keepUnusedDataFor: 5,
    }),
    createChecklist: builder.mutation<void, { checklistTitle: string; cardId: string; boardId: string }>({
      queryFn: (args, { signal }) => addChecklist({ ...args, signal }),
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
    deleteChecklist: builder.mutation<void, { checklistId: string; cardId: string; boardId: string }>({
      queryFn: (args, { signal }) => deleteChecklist({ ...args, signal }),
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
    updateChecklistTitle: builder.mutation<
      void,
      { checklistId: string; updatedTitle: string; cardId: string; boardId: string }
    >({
      queryFn: (args, { signal }) => editChecklistTitle({ ...args, signal }),
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
    markChecklistItemDone: builder.mutation<
      void,
      { itemId: string; checklistId: string; cardId: string; boardId: string }
    >({
      queryFn: (args, { signal }) => markChecklistItemIsDone({ ...args, signal }),
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
    deleteChecklistItem: builder.mutation<
      void,
      { itemId: string; checklistId: string; cardId: string; boardId: string }
    >({
      queryFn: (args, { signal }) => deleteChecklistItem({ ...args, signal }),
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
    updateTitleChecklistItem: builder.mutation<
      void,
      { itemId: string; title: string; checklistId: string; cardId: string; boardId: string }
    >({
      queryFn: (args, { signal }) => editTitleChecklistItem({ ...args, signal }),
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
    addChecklistItem: builder.mutation<void, { title: string; checklistId: string; cardId: string; boardId: string }>({
      queryFn: (args, { signal }) => createChecklistItem({ ...args, signal }),
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
  }),
});

export const {
  useGetCardDetailsQuery,
  useCreateChecklistMutation,
  useDeleteChecklistMutation,
  useUpdateChecklistTitleMutation,
  useMarkChecklistItemDoneMutation,
  useDeleteChecklistItemMutation,
  useUpdateTitleChecklistItemMutation,
  useAddChecklistItemMutation,
} = cardApi;
