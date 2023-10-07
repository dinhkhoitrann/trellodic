import { mockData } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const addCard = async (data: { cardTitle: string; boardId: string; columnId: string }) => {
  return externalRequest.post('/posts', data);
};

export const fetchCard = async (data: { cardId: string; boardId: string; signal: AbortSignal }) => {
  await externalRequest.get('/posts', {
    signal: data.signal,
  });
  return mockData.board.columns[0].cards[0];
};
