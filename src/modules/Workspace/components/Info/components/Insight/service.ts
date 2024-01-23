import { COLUMNS } from './constants';

export const mapDataChart = (data: any[]) => {
  if (!data) return [];
  const mappedData = data.map((item) => {
    item[2] = new Date(item[2]);
    item[3] = new Date(item[3]);
    return item;
  });
  return [COLUMNS, ...mappedData];
};
