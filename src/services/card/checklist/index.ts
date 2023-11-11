import { externalRequest } from '../../request';

export const addChecklist = async (data: {
  checklistTitle: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.post('/posts', data, {
    signal: data.signal,
  });
  return res.data;
};

export const deleteChecklist = async (data: {
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.delete('/posts/1', {
    signal: data.signal,
  });
  return res.data;
};

export const editChecklistTitle = async (data: {
  checklistId: string;
  updatedTitle: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.post('/posts', data, {
    signal: data.signal,
  });
  return res.data;
};

export const markChecklistItemIsDone = async (data: {
  itemId: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.post(
    '/posts',
    {},
    {
      signal: data.signal,
    },
  );
  return res.data;
};

export const deleteChecklistItem = async (data: {
  itemId: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.delete('/posts/1', {
    signal: data.signal,
  });
  return res.data;
};

export const editTitleChecklistItem = async (data: {
  itemId: string;
  title: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.put('/posts/1', data, {
    signal: data.signal,
  });
  return res.data;
};

export const createChecklistItem = async (data: {
  title: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.post('/posts', data, {
    signal: data.signal,
  });
  return res.data;
};
