import { externalRequest } from '../request';

export const searchGlobal = async ({ search }: { search: string }) => {
  const { data } = await externalRequest.get(`/search?q=${search}`);
  return data;
};
