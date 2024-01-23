import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getBoardMembers, inviteMembers, removeMembers } from '@/services/board/member';
import { User } from '@/types/user.type';

export const boardMemberApi = createApi({
  reducerPath: 'boardMemberApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['BoardMember'],
  endpoints: (builder) => ({
    getMembers: builder.query<User[], { boardId: string }>({
      queryFn: async (args, { signal }) => {
        const members = await getBoardMembers({ ...args, signal });
        return { data: members };
      },
      providesTags: (_result, _error, { boardId }) => [{ type: 'BoardMember', id: boardId }],
    }),
    removeMember: builder.mutation<{ data: any }, { boardId: string; memberId: string; onSuccess?: () => void }>({
      queryFn: async (args, { signal }) => ({ data: await removeMembers({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess?.();
      },
      invalidatesTags: (_result, _error, { boardId }) => [{ type: 'BoardMember', id: boardId }],
    }),
    addMembersToBoard: builder.mutation<{ data: any }, { boardId: string; userIds: string[]; onSuccess?: () => void }>({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await inviteMembers({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess?.();
      },
      invalidatesTags: (_result, _error, { boardId }) => [{ type: 'BoardMember', id: boardId }],
    }),
  }),
});

export const { useGetMembersQuery, useRemoveMemberMutation, useAddMembersToBoardMutation } = boardMemberApi;
