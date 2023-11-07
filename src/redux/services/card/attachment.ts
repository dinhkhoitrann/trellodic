/* eslint-disable indent */
import { AxiosResponse } from 'axios';
import { deleteAttachment, uploadAttachments } from '@/services/card/attachment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const attachmentApi = createApi({
  reducerPath: 'attachmentApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Attachment'],
  endpoints: (builder) => ({
    uploadFiles: builder.mutation<AxiosResponse<any, any>, { formData: FormData; onSuccess?: () => void }>({
      queryFn: async (args, { signal }) => ({ data: await uploadAttachments({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
    deleteAttachment: builder.mutation<
      AxiosResponse<any, any>,
      {
        attachmentId: string;
        boardId: string;
        cardId: string;
        onSuccess?: () => void;
      }
    >({
      queryFn: async (args, { signal }) => ({ data: await deleteAttachment({ ...args, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useUploadFilesMutation, useDeleteAttachmentMutation } = attachmentApi;
