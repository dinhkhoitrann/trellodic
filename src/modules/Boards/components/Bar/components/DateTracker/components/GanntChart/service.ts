import { COLUMNS } from './constants';

export const mapDataChart = (data: any[]) => {
  if (!data) return [];
  const mappedData = data.map((item) => {
    item[3] = new Date(item[3]);
    item[4] = new Date(item[4]);
    return item;
  });
  return [COLUMNS, ...mappedData];
};
