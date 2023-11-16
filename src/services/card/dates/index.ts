import { externalRequest } from '../../request';

export const editDueDates = (data: {
  startDate: Date;
  endDate: Date;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};

export const markCardIsDone = (data: { cardId: string; boardId: string; isDone: boolean; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};
