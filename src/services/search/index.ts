import { mockSearchResult } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const searchGlobal = async (data: { search: string }) => {
  await externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
  return mockSearchResult;
};

export const searchUsersBy = async (data: { email?: string }) => {
  await externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
  return [
    {
      _id: '1',
      name: 'Khoi Tran',
    },
    {
      _id: '2',
      name: 'Khoi Tran 111',
    },
  ];
};
