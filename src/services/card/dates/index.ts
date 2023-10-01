import { externalRequest } from '../../request';

export const editDueDates = async (data: { dueDate: Date; cardId: string; boardId: string }) => {
  return externalRequest.post(`/api/boards/${data.boardId}/card/${data.cardId}/dueDates`, data);
};
