export function mapLabelsToState(labels: any[]) {
  const obj: any = {};
  labels.forEach((label) => {
    obj[label.title] = label.isSelected;
  });
  return obj;
}
