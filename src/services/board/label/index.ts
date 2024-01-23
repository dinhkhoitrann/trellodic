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

export const deleteLabel = ({ labelId, cardId, signal }: { labelId: string; cardId?: string; signal: AbortSignal }) => {
  let path = `/labels/${labelId}`;
  if (cardId) {
    path = path + `?cardId=${cardId}`;
  }
  return externalRequest.delete(path, { signal });
};

export const addLabelToCard = ({
  cardId,
  signal,
  ...rest
}: {
  labelId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post(`/cards/${cardId}/labels`, rest, { signal });
};
