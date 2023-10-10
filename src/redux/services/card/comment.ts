/* eslint-disable indent */
import { addComment, deleteComment, editComment } from '@/services/card/comment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const commentApi = createApi({
  reducerPath: 'commentApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Comment'],
  endpoints: (builder) => ({
    createComment: builder.mutation<void, { content: string; boardId: string; cardId: string; onSuccess?: () => void }>(
      {
        queryFn: (args, { signal }) => addComment({ ...args, signal }),
        onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
          await queryFulfilled;
          onSuccess && onSuccess();
        },
      },
    ),
    editComment: builder.mutation<
      void,
      { content: string; commentId: string; boardId: string; cardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => editComment({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteComment: builder.mutation<
      void,
      { commentId: string; boardId: string; cardId: string; onSuccess?: () => void }
    >({
      queryFn: (args, { signal }) => deleteComment({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useCreateCommentMutation, useEditCommentMutation, useDeleteCommentMutation } = commentApi;
