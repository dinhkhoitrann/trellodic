import { mockData } from '@/apis/mock-data';
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

export const fetchCard = async (data: { cardId: string; boardId: string; signal: AbortSignal }) => {
  await externalRequest.get('/posts', {
    signal: data.signal,
  });
  return mockData.board.columns[0].cards[0];
};
