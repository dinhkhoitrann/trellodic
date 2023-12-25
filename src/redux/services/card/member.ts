/* eslint-disable indent */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { addMembers, removeMember } from '@/services/card/member';

export const memberApi = createApi({
  reducerPath: 'memberApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Member'],
  endpoints: (builder) => ({
    addMembersToCard: builder.mutation<
      { data: any },
      {
        cardId: string;
        userIds: string[];
        onSuccess?: () => void;
      }
    >({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await addMembers({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    removeMemberFromCard: builder.mutation<
      { data: any },
      {
        cardId: string;
        memberId: string;
        onSuccess?: () => void;
      }
    >({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await removeMember({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useAddMembersToCardMutation, useRemoveMemberFromCardMutation } = memberApi;
