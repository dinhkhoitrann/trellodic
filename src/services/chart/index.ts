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

export const getCompletedTaskTrendByMonth = (): Promise<{ [key: string]: any }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const xAxis = [...Array(30)].map((_, index) => {
        const today = new Date();
        return new Date().setDate(today.getDate() - 30 + index);
      });
      const completedTasksByMonth = [...Array(30)].map(() => Math.floor(Math.random() * 100));

      resolve({ xAxis, completedTasksByMonth });
    }, 500);
  });
};
