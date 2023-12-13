import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { filterBoard } from '@/services/board/filter';
import { Board } from '@/types/board.type';

export const boardFilterApi = createApi({
  reducerPath: 'boardFilterApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Board_Filter'],
  endpoints: (builder) => ({
    filterBoard: builder.query<Board, { boardId: string; labels?: string[] }>({
      queryFn: async (args, { signal }) => {
        const board = await filterBoard({ ...args, signal });
        return { data: board };
      },
      providesTags: (_result, _error, { boardId }) => [{ type: 'Board_Filter', id: boardId }],
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useLazyFilterBoardQuery } = boardFilterApi;
