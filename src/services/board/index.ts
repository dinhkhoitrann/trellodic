import { externalRequest } from '../request';

export const fetchBoardDetails = async (data: { boardId: string; signal: AbortSignal }) => {
  const response = await externalRequest.get(`/api/boards/${data.boardId}`, {
    signal: data.signal,
  });

  return response.data?.board;
};
