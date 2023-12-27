import { externalRequest } from '../../request';

export const createLabel = (data: {
  title: string;
  color: string;
  boardId: string;
  cardId?: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/labels', data);
};

export const editLabel = ({
  labelId,
  signal,
  ...rest
}: {
  title: string;
  color: string;
  labelId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/labels/${labelId}`, rest, { signal });
};

export const addLabelToCard = (data: { labelId: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};
