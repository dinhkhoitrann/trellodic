import { externalRequest } from '@/services/request';

export const editDescription = ({
  signal,
  ...rest
}: {
  content: string;
  boardId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', rest, {
    signal,
  });
};
