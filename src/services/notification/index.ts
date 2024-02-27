import { externalRequest } from '../request';

export const getNotifs = async () => {
  await externalRequest.get('https://jsonplaceholder.typicode.com/posts');
  return [
    {
      _id: 'n1',
      triggeredBy: 'Tran Dinh Khoi',
      activity: 'upload an attachment to Learn ReactJS card',
      createdOn: new Date('10/12/2023').toISOString(),
      isRead: false,
    },
    {
      _id: 'n2',
      triggeredBy: 'Tran Dinh Khoi',
      activity: 'add a description to Learn NextJS card',
      createdOn: new Date('10/12/2023').toISOString(),
      isRead: true,
    },
  ];
};

export const markNotiAsRead = async (data: { notiId: string }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};
