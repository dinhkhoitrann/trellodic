import { externalRequest } from '../../request';

export const createLabel = ({
  signal,
  ...rest
}: {
  title: string;
  color: string;
  boardId: string;
  cardId?: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post('/labels', rest, { signal });
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

export const deleteLabel = ({ labelId, signal }: { labelId: string; signal: AbortSignal }) => {
  return externalRequest.delete(`/labels/${labelId}`, { signal });
};

export const addLabelToCard = (data: { labelId: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};
