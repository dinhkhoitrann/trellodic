import { externalRequest } from '../../request';

export const editDueDates = async (data: {
  startDate: Date;
  endDate: Date;
  cardId: string;
  boardId: string;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.post('/posts', data);
  return res.data;
};

export const markCardIsDone = async (data: {
  cardId: string;
  boardId: string;
  isDone: boolean;
  signal: AbortSignal;
}) => {
  const res = await externalRequest.post('/posts', data);
  return res.data;
};
