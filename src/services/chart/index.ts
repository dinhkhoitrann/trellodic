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

export const getTasksCountByColumn = (): Promise<{ [key: string]: any }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          inProgress: 12,
          overdue: 60,
          completed: 40,
          column: 'Done Column 03',
        },
        {
          inProgress: 30,
          overdue: 0,
          completed: 1,
          column: 'To Do Column 01',
        },
        {
          inProgress: 90,
          overdue: 12,
          completed: 20,
          column: 'Inprogress Column 02',
        },
        {
          inProgress: 8,
          overdue: 12,
          completed: 80,
          column: 'Empty Column 04',
        },
      ]);
    }, 500);
  });
};
