import { externalRequest } from '../../request';

export const addChecklist = (data: {
  checklistTitle: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/posts', data, {
    signal: data.signal,
  });
};

export const deleteChecklist = (data: {
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete('/posts/1', {
    signal: data.signal,
  });
};

export const editChecklistTitle = (data: {
  checklistId: string;
  updatedTitle: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/posts', data, {
    signal: data.signal,
  });
};

export const markChecklistItemIsDone = (data: {
  itemId: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post(
    '/posts',
    {},
    {
      signal: data.signal,
    },
  );
};

export const deleteChecklistItem = (data: {
  itemId: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete('/posts/1', {
    signal: data.signal,
  });
};

export const editTitleChecklistItem = (data: {
  itemId: string;
  title: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.put('/posts/1', data, {
    signal: data.signal,
  });
};

export const createChecklistItem = (data: {
  title: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/posts', data, {
    signal: data.signal,
  });
};
