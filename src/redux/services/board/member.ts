import { inviteMembers, removeMembers } from '@/services/board/member';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const boardMemberApi = createApi({
  reducerPath: 'boardMemberApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['BoardMember'],
  endpoints: (builder) => ({
    removeMember: builder.mutation<{ data: any }, { boardId: string; memberId: string; onSuccess?: () => void }>({
      queryFn: async (args, { signal }) => ({ data: await removeMembers({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess?.();
      },
    }),
    addMembersToBoard: builder.mutation<{ data: any }, { memberIds: string[]; onSuccess?: () => void }>({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await inviteMembers({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess?.();
      },
    }),
  }),
});

export const { useRemoveMemberMutation, useAddMembersToBoardMutation } = boardMemberApi;
