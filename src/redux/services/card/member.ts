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
        onFailed?: (_errorMsg: string) => void;
      }
    >({
      queryFn: (args, { signal }) => addMembers({ ...args, signal }),
      onQueryStarted: async ({ onSuccess, onFailed }, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          onSuccess && onSuccess();
        } catch (error) {
          onFailed && onFailed((error as Error).message);
        }
      },
    }),
  }),
});

export const { useAddMembersToCardMutation } = memberApi;
