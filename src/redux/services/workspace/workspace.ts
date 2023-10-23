/* eslint-disable indent */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { createBoard, createWorkspace, editWorkspaceName, getWorkspace, getWorkspaceList } from '@/services/workspace';
import { save as saveBoard } from '@/redux/slices/board';
import { save as saveWorkspace } from '@/redux/slices/workspace';
import { Workspace } from '@/types/workspace.type';
import { Board } from '@/types/board.type';

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
      onQueryStarted: async (_, { queryFulfilled, dispatch }) => {
        const { data } = await queryFulfilled;
        dispatch(saveWorkspace({ detail: data }));
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
          dispatch(saveWorkspace({ detail: data[0], list: data }));
        }
      },
      providesTags: (result) =>
        result
          ? [...result.map(({ _id }) => ({ type: 'Workspace', id: _id } as const)), { type: 'Workspace', id: 'LIST' }]
          : [{ type: 'Workspace', id: 'LIST' }],
    }),
    createBoard: builder.mutation<
      { data: Partial<Board> },
      { name: string; workspaceId: string; onSuccess?: (_boardId: string) => void }
    >({
      queryFn: async (args, { signal }) => createBoard({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled, dispatch }) => {
        const {
          data: { data },
        } = await queryFulfilled;
        dispatch(saveBoard(data));
        onSuccess && onSuccess(data._id || '');
      },
      invalidatesTags: (_result, _error, { workspaceId }) => [{ type: 'Workspace', id: workspaceId }],
    }),
    editWorkspaceName: builder.mutation<void, { workspaceId: string; name: string }>({
      queryFn: (args, { signal }) => editWorkspaceName({ ...args, signal }),
      onQueryStarted: async ({ workspaceId }, { queryFulfilled, dispatch }) => {
        await queryFulfilled;
        dispatch({
          type: 'workspaceApi/invalidateTags',
          payload: [{ type: 'Workspace', id: workspaceId }],
        });
      },
    }),
    createWorkspace: builder.mutation<{ data: Partial<Workspace> }, { name: string; onSuccess?: () => void }>({
      queryFn: (args, { signal }) => createWorkspace({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
      invalidatesTags: [{ type: 'Workspace', id: 'LIST' }],
    }),
  }),
});

export const {
  useCreateBoardMutation,
  useLazyGetWorkspaceQuery,
  useGetWorkspaceListQuery,
  useEditWorkspaceNameMutation,
  useCreateWorkspaceMutation,
} = workspaceApi;
