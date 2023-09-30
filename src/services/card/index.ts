import { FE_API_ROOT } from '@/utils/constants';
import { internalRequest } from '../request';
import { Checklist } from '@/types/card.type';

export const addCard = async (data: { cardTitle: string; boardId: string; columnId: string }) => {
  return internalRequest.post(`${FE_API_ROOT}/api/boards/${data.boardId}/card`, data);
};

export const fetchCard = async (data: { cardId: string; boardId: string; signal: AbortSignal }) => {
  const response = await internalRequest.get(`${FE_API_ROOT}/api/boards/${data.boardId}/card/${data.cardId}`, {
    signal: data.signal,
  });
  return response.data?.card;
};

export const addChecklist = async (data: {
  checklistTitle: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}): Promise<Checklist> => {
  const response = await internalRequest.post(
    `${FE_API_ROOT}/api/boards/${data.boardId}/card/${data.cardId}/checklist`,
    data,
    {
      signal: data.signal,
    },
  );
  return response.data.checklist;
};

export const deleteChecklist = async (data: {
  checklistId: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return internalRequest.delete(
    `${FE_API_ROOT}/api/boards/${data.boardId}/card/${data.cardId}/checklist/${data.checklistId}`,
  );
};

export const editChecklistTitle = async (data: {
  checklistId: string;
  updatedTitle: string;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const response = await internalRequest.post(
    `${FE_API_ROOT}/api/boards/${data.boardId}/card/${data.cardId}/checklist/${data.checklistId}`,
    data,
    {
      signal: data.signal,
    },
  );
  return response.data?.updatedChecklist;
};

export const editDueDates = async (data: { dueDate: Date; cardId: string; boardId: string }) => {
  return internalRequest.post(`${FE_API_ROOT}/api/boards/${data.boardId}/card/${data.cardId}/dueDates`, data);
};
