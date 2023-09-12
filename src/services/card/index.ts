import { FE_API_ROOT } from '@/utils/constants';
import { internalRequest } from '../request';

export const addCard = async (data: { cardTitle: string; boardId: string; columnId: string }) => {
  return internalRequest.post(`${FE_API_ROOT}/api/boards/${data.boardId}/card`, data);
};
