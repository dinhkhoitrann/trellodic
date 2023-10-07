import { externalRequest } from '../../request';

export const editDueDates = async (data: {
  startDate: Date;
  endDate: Date;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/posts', data);
};

export const markCardIsDone = async (data: {
  cardId: string;
  boardId: string;
  isDone: boolean;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/posts', data);
};
