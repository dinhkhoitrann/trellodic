import Cookies from 'js-cookie';
import { externalRequest } from '../request';

export const fetchBoardDetails = async ({ boardId, signal }: { boardId: string; signal?: AbortSignal }) => {
  const response = await fetch(`http://localhost:8080/api/v1/boards/${boardId}`, {
    method: 'GET',
    signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Cookies.get('token')}`,
    },
  });
  const data = await response.json();
  return data.data;
};

export const updateBoard = ({ boardId, signal, ...rest }: { boardId: string; name?: string; signal: AbortSignal }) => {
  return externalRequest.patch(`/boards/${boardId}`, rest, { signal });
};
