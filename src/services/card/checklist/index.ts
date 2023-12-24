import { externalRequest } from '../../request';

export const addChecklist = ({ cardId, signal, ...rest }: { name: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.post(`/cards/${cardId}/checklists`, rest, {
    signal: signal,
  });
};

export const deleteChecklist = ({
  cardId,
  checklistId,
  signal,
}: {
  checklistId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete(`/cards/${cardId}/checklists/${checklistId}`, { signal });
};

export const editChecklistName = ({
  cardId,
  checklistId,
  signal,
  ...rest
}: {
  checklistId: string;
  name: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/cards/${cardId}/checklists/${checklistId}`, rest, { signal });
};

export const deleteChecklistItem = ({
  cardId,
  checklistId,
  itemId,
  signal,
}: {
  itemId: string;
  checklistId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete(`/cards/${cardId}/checklists/${checklistId}/items/${itemId}`, {
    signal,
  });
};

export const editChecklistItem = ({
  cardId,
  checklistId,
  itemId,
  signal,
  ...rest
}: {
  itemId: string;
  title?: string;
  isDone?: boolean;
  checklistId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/cards/${cardId}/checklists/${checklistId}/items/${itemId}`, rest, {
    signal,
  });
};

export const createChecklistItem = ({
  cardId,
  checklistId,
  signal,
  ...rest
}: {
  title: string;
  checklistId: string;
  cardId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.post(`/cards/${cardId}/checklists/${checklistId}/items`, rest, {
    signal: signal,
  });
};
