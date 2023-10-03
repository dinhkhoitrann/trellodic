import { createLabel } from '@/services/board/label';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const labelApi = createApi({
  reducerPath: 'labelApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Label'],
  endpoints: (builder) => ({
    addLabel: builder.mutation<
      void,
      { title: string; color: string; boardId: string; onSuccess?: () => void; onFailed?: (_errorMsg: string) => void }
        >({
          queryFn: (args, { signal }) => createLabel({ ...args, signal }),
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

export const { useAddLabelMutation } = labelApi;
