import { externalRequest } from '../../request';

export const createLabel = (data: { title: string; color: string; boardId: string; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};

export const editLabel = (data: { title: string; color: string; boardId: string; signal: AbortSignal }) => {
  return externalRequest.put('https://jsonplaceholder.typicode.com/posts/1', data);
};

export const addLabelToCard = (data: { labelId: string; cardId: string; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', data);
};
