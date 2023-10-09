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
      onQueryStarted: async ({ onSuccess, onFailed }, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          onSuccess && onSuccess();
        } catch (error) {
          onFailed && onFailed('Something went wrong');
        }
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
      onQueryStarted: async ({ onSuccess, onFailed }, { queryFulfilled }) => {
        try {
          await queryFulfilled;
          onSuccess && onSuccess();
        } catch (error) {
          onFailed && onFailed('Something went wrong');
        }
      },
    }),
  }),
});

export const { useUploadFilesMutation, useDeleteAttachmentMutation } = attachmentApi;
