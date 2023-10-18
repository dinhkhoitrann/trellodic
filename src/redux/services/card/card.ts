import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Card } from '@/types/card.type';
import { fetchCard } from '@/services/card';

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
  }),
});

export const { useGetCardDetailsQuery } = cardApi;
