/* eslint-disable indent */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createBoard, getWorkspace, getWorkspaceList } from '@/services/workspace';
import { save as saveBoard } from '@/redux/slices/board';
import { save as saveWorkspace } from '@/redux/slices/workspace';
import { mockData } from '@/apis/mock-data';
import { Workspace } from '@/types/workspace.type';

export const workspaceApi = createApi({
  reducerPath: 'workspaceApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Workspace'],
  endpoints: (builder) => ({
    getWorkspace: builder.query<Workspace, { workspaceId: string }>({
      queryFn: async (args, { signal }) => {
        const data = await getWorkspace({ ...args, signal });
        return { data };
      },
      providesTags: (_result, _error, { workspaceId }) => [{ type: 'Workspace', id: workspaceId }],
      keepUnusedDataFor: 5,
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        const { data } = await queryFulfilled;
        dispatch(saveWorkspace(data));
      },
    }),
    getWorkspaceList: builder.query<Workspace[], { userId: string }>({
      queryFn: async (args, { signal }) => {
        const data = await getWorkspaceList({ ...args, signal });
        return { data };
      },
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        const { data } = await queryFulfilled;
        if (data.length > 0) {
          dispatch(saveWorkspace(data[0]));
        }
      },
    }),
    createBoard: builder.mutation<
      { boardId: string },
      { boardTitle: string; workspaceId: string; onSuccess?: (_boardId: string) => void }
    >({
      queryFn: async (args, { signal }) => {
        await createBoard({ ...args, signal });
        return { data: { boardId: '1' } };
      },
      onQueryStarted: async ({ onSuccess }, { queryFulfilled, dispatch }) => {
        const {
          data: { boardId },
        } = await queryFulfilled;
        await queryFulfilled;
        dispatch(saveBoard(mockData.board));
        onSuccess && onSuccess(boardId);
      },
    }),
  }),
});

export const { useCreateBoardMutation, useLazyGetWorkspaceQuery, useGetWorkspaceListQuery } = workspaceApi;
