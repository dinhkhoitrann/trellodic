import { FE_API_ROOT } from '@/utils/constants';
import { internalRequest } from '../request';

export const createLabel = (data: { title: string; color: string; boardId: string }) => {
  return internalRequest.post(`${FE_API_ROOT}/api/boards/${data.boardId}/label`, data);
};

export const editLabel = (data: { title: string; color: string; boardId: string }) => {
  return internalRequest.put(`${FE_API_ROOT}/api/boards/${data.boardId}/label`, data);
};
