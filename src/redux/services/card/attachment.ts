/* eslint-disable indent */
import { addAttachment, deleteAttachment, uploadAttachments } from '@/services/card/attachment';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const attachmentApi = createApi({
  reducerPath: 'attachmentApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Attachment'],
  endpoints: (builder) => ({
    uploadFiles: builder.mutation<{ data: any }, { formData: FormData; cardId: string; onSuccess?: () => void }>({
      queryFn: async ({ cardId, onSuccess, ...rest }, { signal }) => ({
        data: await uploadAttachments({ ...rest, signal }),
      }),
      onQueryStarted: async ({ cardId, onSuccess }, { queryFulfilled }) => {
        const { data } = await queryFulfilled;
        await addAttachment({ ...data.data, cardId });
        onSuccess && onSuccess();
      },
    }),
    deleteAttachment: builder.mutation<
      { data: any },
      {
        attachmentId: string;
        cardId: string;
        onSuccess?: () => void;
      }
    >({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await deleteAttachment({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess && onSuccess();
      },
    }),
  }),
});

export const { useUploadFilesMutation, useDeleteAttachmentMutation } = attachmentApi;
