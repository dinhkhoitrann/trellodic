import Cookies from 'js-cookie';
import { BE_API_ROOT } from '@/utils/constants';
import { externalRequest } from '../request';

export const fetchBoardDetails = async ({
  boardId,
  token,
  signal,
}: {
  boardId: string;
  token?: string;
  signal?: AbortSignal;
}) => {
  const response = await fetch(`${BE_API_ROOT}boards/${boardId}`, {
    method: 'GET',
    signal,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token || Cookies.get('token')}`,
    },
  });
  const data = await response.json();
  return data.data;
};

export const updateBoard = ({ boardId, signal, ...rest }: { boardId: string; name?: string; signal: AbortSignal }) => {
  return externalRequest.patch(`/boards/${boardId}`, rest, { signal });
};
