import { mockData } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const fetchBoardDetails = async (data: { boardId: string; signal?: AbortSignal }) => {
  await externalRequest.get('https://jsonplaceholder.typicode.com/posts', {
    signal: data.signal,
  });

  return mockData.board;
};
