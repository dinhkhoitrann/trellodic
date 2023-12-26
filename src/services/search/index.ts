import { mockSearchResult } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const searchGlobal = async (data: { search: string }) => {
  await externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
  return mockSearchResult;
};
