import { externalRequest } from '@/services/request';

export const updateSkills = ({
  cardId,
  signal,
  ...rest
}: {
  cardId: string;
  skills: string[];
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/cards/${cardId}/skills`, rest, { signal });
};
