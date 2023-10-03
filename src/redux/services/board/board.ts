import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Board } from '@/types/board.type';
import { fetchBoardDetails } from '@/services/board';

export const boardApi = createApi({
  reducerPath: 'boardApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Board'],
  endpoints: (builder) => ({
    getBoardDetails: builder.query<Board, { boardId: string }>({
      queryFn: async (args, { signal }) => {
        const board: Board = await fetchBoardDetails({ ...args, signal });
        return { data: board };
      },
      providesTags: (_result, _error, { boardId }) => [{ type: 'Board', id: boardId }],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetBoardDetailsQuery } = boardApi;
