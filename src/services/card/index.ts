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

export const fetchCard = async (data: { cardId: string; signal: AbortSignal }) => {
  const { data: responseData } = await externalRequest.get('/cards/655497a43b7dba7af3972bd4', {
    signal: data.signal,
  });
  return responseData;
};
