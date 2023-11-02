import { internalRequest } from '../request';

export const generateSummary = async (data: {
  categories: {
    name: string;
    todos: {
      title: string | undefined;
      dueDate: string | undefined;
    }[];
  }[];
  stylingMode: string;
}) => {
  const { data: responseData } = await internalRequest.post('/api/generateSummary', data);
  return responseData;
};
