import { FE_API_ROOT } from '@/utils/constants';
import { externalRequest } from '../../request';

export const addChecklist = (data: {
  checklistTitle: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post(`/api/boards/${data.boardId}/card/${data.cardId}/checklist`, data, {
    signal: data.signal,
  });
};

export const deleteChecklist = (data: {
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete(
    `${FE_API_ROOT}/api/boards/${data.boardId}/card/${data.cardId}/checklist/${data.checklistId}`,
    {
      signal: data.signal,
    },
  );
};

export const editChecklistTitle = (data: {
  checklistId: string;
  updatedTitle: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post(`/api/boards/${data.boardId}/card/${data.cardId}/checklist/${data.checklistId}`, data, {
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
  return externalRequest.patch(
    `/api/boards/${data.boardId}/card/${data.cardId}/checklist/${data.checklistId}/item/${data.itemId}`,
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
  return externalRequest.delete(
    `/api/boards/${data.boardId}/card/${data.cardId}/checklist/${data.checklistId}/item/${data.itemId}`,
    {
      signal: data.signal,
    },
  );
};

export const editTitleChecklistItem = (data: {
  itemId: string;
  title: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.put(
    `/api/boards/${data.boardId}/card/${data.cardId}/checklist/${data.checklistId}/item/${data.itemId}`,
    data,
    {
      signal: data.signal,
    },
  );
};

export const createChecklistItem = (data: {
  title: string;
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post(
    `/api/boards/${data.boardId}/card/${data.cardId}/checklist/${data.checklistId}/item`,
    data,
    {
      signal: data.signal,
    },
  );
};
