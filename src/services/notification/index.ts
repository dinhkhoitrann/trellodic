import { mockNotifs } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const getNotifs = async () => {
  await externalRequest.get('https://jsonplaceholder.typicode.com/posts');
  return mockNotifs;
};

export const markNotiAsRead = async (data: { notiId: string }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};
