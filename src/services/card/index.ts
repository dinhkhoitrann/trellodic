import { externalRequest } from '../request';

export const addCard = async (data: { title: string; columnId: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  const res = await externalRequest.post(
    'http://localhost:8080/api/v1/cards',
    {
      ...rest,
      columnId: '654c9e7ed187ac099b18a10c',
    },
    { signal },
  );
  return res.data;
};

export const fetchCard = async (data: { cardId: string; signal: AbortSignal }) => {
  const res = await externalRequest.get('http://localhost:8080/api/v1/cards/655484ea3b7dba7af3972bcf', {
    signal: data.signal,
  });
  return res.data.data;
};
