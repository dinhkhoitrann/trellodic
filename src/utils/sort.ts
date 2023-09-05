export const mapOrder = <T>(originalArray: T[], orderArray: string[], key: keyof T) => {
  if (!originalArray || !orderArray || !key) return [];

  const clonedArray = [...originalArray];
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key] as string) - orderArray.indexOf(b[key] as string);
  });

  return orderedArray;
};
