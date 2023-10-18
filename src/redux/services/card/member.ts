/* eslint-disable indent */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addMembers } from '@/services/card/member';

export const memberApi = createApi({
  reducerPath: 'memberApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Member'],
  endpoints: (builder) => ({
    addMembersToCard: builder.mutation<
      void,
      {
        cardId: string;
        boardId: string;
        memberIds: string[];
        onSuccess?: () => void;
      }
    >({
      queryFn: (args, { signal }) => addMembers({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useAddMembersToCardMutation } = memberApi;
