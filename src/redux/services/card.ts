import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Card, Checklist } from '@/types/card.type';
import { addChecklist, deleteChecklist, editChecklistTitle, fetchCard } from '@/services/card';

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
    createChecklist: builder.mutation<Checklist, { checklistTitle: string; cardId: string; boardId: string }>({
      queryFn: async (args, { signal }) => {
        const checklist: Checklist = await addChecklist({ ...args, signal });
        return { data: checklist };
      },
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
    deleteChecklist: builder.mutation<string, { checklistId: string; cardId: string; boardId: string }>({
      queryFn: async (args, { signal }) => {
        await deleteChecklist({ ...args, signal });
        return { data: args.checklistId };
      },
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
    updateChecklistTitle: builder.mutation<
      Checklist,
      { checklistId: string; updatedTitle: string; cardId: string; boardId: string }
    >({
      queryFn: async (args, { signal }) => {
        const updatedChecklist: Checklist = await editChecklistTitle({ ...args, signal });
        return { data: updatedChecklist };
      },
      invalidatesTags: (_result, _error, { cardId }) => [{ type: 'Card', id: cardId }],
    }),
  }),
});

export const {
  useGetCardDetailsQuery,
  useCreateChecklistMutation,
  useDeleteChecklistMutation,
  useUpdateChecklistTitleMutation,
} = cardApi;
