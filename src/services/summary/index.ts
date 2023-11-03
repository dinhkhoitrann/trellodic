import { internalRequest } from '../request';

export const generateSummary = async (data: {
  categories: {
    name: string;
    todos: {
      title: string | undefined;
      dueDate: string | undefined;
    }[];
  }[];
}) => {
  const response = await internalRequest.post('/api/chat', data);
  return response;
};
