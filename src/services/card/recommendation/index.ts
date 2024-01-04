import { externalRequest } from '@/services/request';

export const getMemberRecommendations = async ({ cardId }: { cardId: string }) => {
  const { data } = await externalRequest.get(`/cards/${cardId}/recommended-users`);
  return data;
};
