/* eslint-disable indent */
import { deleteAttachment, uploadAttachments } from '@/services/card/attachment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const attachmentApi = createApi({
  reducerPath: 'attachmentApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Attachment'],
  endpoints: (builder) => ({
    uploadFiles: builder.mutation<
      void,
      { files: File[]; boardId: string; cardId: string; onSuccess?: () => void; onFailed?: (_errMsg: string) => void }
    >({
      queryFn: (args, { signal }) => uploadAttachments({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteAttachment: builder.mutation<
      void,
      {
        attachmentId: string;
        boardId: string;
        cardId: string;
        onSuccess?: () => void;
        onFailed?: (_errMsg: string) => void;
      }
    >({
      queryFn: (args, { signal }) => deleteAttachment({ ...args, signal }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useUploadFilesMutation, useDeleteAttachmentMutation } = attachmentApi;
