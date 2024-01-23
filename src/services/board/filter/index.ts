import qs from 'qs';
import { externalRequest } from '@/services/request';

export const filterBoard = async ({
  boardId,
  labelIds,
  signal,
}: {
  boardId: string;
  labelIds?: string[];
  signal: AbortSignal;
}) => {
  const labelsQuery = qs.stringify({ labelIds }, { indices: false });
  const { data } = await externalRequest.get(`/boards/${boardId}?${labelsQuery}`, { signal });
  return data;
};
