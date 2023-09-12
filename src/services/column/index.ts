import { FE_API_ROOT } from '@/utils/constants';
import { internalRequest } from '../request';

export const addColumn = (data: { columnTitle: string; boardId: string }) => {
  return internalRequest.post(`${FE_API_ROOT}/api/boards/${data.boardId}/column`, data);
};
