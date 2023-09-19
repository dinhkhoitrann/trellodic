import { FE_API_ROOT } from '@/utils/constants';
import { internalRequest } from '../request';

export const addCard = async (data: { cardTitle: string; boardId: string; columnId: string }) => {
  return internalRequest.post(`${FE_API_ROOT}/api/boards/${data.boardId}/card`, data);
};

export const fetchCard = async (data: { cardId: string; boardId: string; signal: AbortSignal }) => {
  const response = await internalRequest.get(`${FE_API_ROOT}/api/boards/${data.boardId}/card/${data.cardId}`, {
    signal: data.signal,
  });
  return response.data?.card;
};

export const addChecklist = async (data: { checklistTitle: string; cardId: string; boardId: string }) => {
  return internalRequest.post(`${FE_API_ROOT}/api/boards/${data.boardId}/card/${data.cardId}/checklist`, data);
};
