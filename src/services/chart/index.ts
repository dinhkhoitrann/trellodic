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
          column: 'In Peer Review',
        },
        {
          inProgress: 30,
          overdue: 0,
          completed: 1,
          column: 'New',
        },
        {
          inProgress: 90,
          overdue: 12,
          completed: 20,
          column: 'In Development',
        },
        {
          inProgress: 8,
          overdue: 12,
          completed: 80,
          column: 'Dev Done',
        },
      ]);
    }, 500);
  });
};

export const getPercentageTaskStatus = (): Promise<{ value: number; label: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 6, label: 'In Progress' },
        { value: 44, label: 'Overdue' },
        { value: 50, label: 'Completed' },
      ]);
    }, 500);
  });
};

export const getPercentageTaskAssignee = (): Promise<{ value: number; label: string }[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { value: 10, label: 'Taylor' },
        { value: 80, label: 'Karen' },
        { value: 5, label: 'Dustin' },
        { value: 5, label: 'Karina' },
      ]);
    }, 500);
  });
};
