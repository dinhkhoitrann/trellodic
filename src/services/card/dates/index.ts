import { externalRequest } from '../../request';

export const editDueDates = ({
  cardId,
  signal,
  ...rest
}: {
  startDate: string;
  endDate: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/cards/${cardId}/date`, rest, { signal });
};

export const removeDates = ({ cardId, signal }: { cardId: string; signal: AbortSignal }) => {
  return externalRequest.delete(`/cards/${cardId}/date`, { signal });
};
