export const getTaskStatusChartData = (): Promise<{ [key: string]: any }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          inProgress: 59,
          overdue: 57,
          completed: 86,
          assignee: 'Tran Dinh Khoi',
        },
        {
          inProgress: 70,
          overdue: 20,
          completed: 50,
          assignee: 'Katara',
        },
        {
          inProgress: 10,
          overdue: 20,
          completed: 50,
          assignee: 'Aspara',
        },
      ]);
    }, 500);
  });
};
