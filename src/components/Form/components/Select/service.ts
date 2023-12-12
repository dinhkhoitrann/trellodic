export const getOptionLabel = (options: any[] | undefined, selected: any, key: string | undefined) => {
  return options?.find((option) => option._id === selected)?.[key || ''];
};
