import { externalRequest } from '../request';

export const addCard = async (data: { cardTitle: string; boardId: string; columnId: string }) => {
  return externalRequest.post(`/api/boards/${data.boardId}/card`, data);
};

export const fetchCard = async (data: { cardId: string; boardId: string; signal: AbortSignal }) => {
  const response = await externalRequest.get(`/api/boards/${data.boardId}/card/${data.cardId}`, {
    signal: data.signal,
  });
  return response.data?.card;
};
