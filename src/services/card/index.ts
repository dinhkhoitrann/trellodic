import { externalRequest } from '../request';

export const addCard = ({ signal, ...rest }: { title: string; columnId: string; signal: AbortSignal }) => {
  return externalRequest.post(
    '/cards',
    {
      ...rest,
      columnId: '654c9e7ed187ac099b18a10c',
    },
    { signal },
  );
};

export const fetchCard = async ({ cardId, signal }: { cardId: string; signal: AbortSignal }) => {
  const { data: responseData } = await externalRequest.get(`/cards/${cardId}`, {
    signal,
  });
  return responseData;
};

export const editCard = ({
  cardId,
  signal,
  ...rest
}: {
  cardId: string;
  title?: string;
  description?: string;
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/cards/${cardId}`, rest, { signal });
};
