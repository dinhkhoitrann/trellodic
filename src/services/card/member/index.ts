import { externalRequest } from '@/services/request';

export const addMembers = ({ cardId, signal, ...rest }: { cardId: string; userIds: string[]; signal: AbortSignal }) => {
  return externalRequest.post(`/cards/${cardId}/members`, rest, { signal });
};

export const getUsersToAddToCard = async ({ cardId }: { cardId: string }) => {
  const response = await externalRequest.get(`/users/to-add-to-card?cardId=${cardId}`);
  return response.data;
};
