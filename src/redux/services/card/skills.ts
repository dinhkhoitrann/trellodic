/* eslint-disable indent */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { updateSkills } from '@/services/card/skills';

export const skillsApi = createApi({
  reducerPath: 'skillsApi',
  baseQuery: fetchBaseQuery(),
  tagTypes: ['Skills'],
  endpoints: (builder) => ({
    updateSkills: builder.mutation<
      { data: any },
      {
        cardId: string;
        skills: string[];
        onSuccess: () => void;
      }
    >({
      queryFn: async ({ onSuccess, ...rest }, { signal }) => ({ data: await updateSkills({ ...rest, signal }) }),
      onQueryStarted: async ({ onSuccess }, { queryFulfilled }) => {
        await queryFulfilled;
        onSuccess();
      },
    }),
  }),
});

export const { useUpdateSkillsMutation } = skillsApi;
