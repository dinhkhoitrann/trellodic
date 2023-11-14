import { mockNotifs } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const getNotifs = async () => {
  await externalRequest.get('/posts');
  return mockNotifs;
};

export const markNotiAsRead = async (data: { notiId: string }) => {
  return externalRequest.post('/posts', data);
};
