export const getBoardTimeline = (data: { boardId: string }): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const columns = [
        { type: 'string', label: 'Task ID' },
        { type: 'string', label: 'Task Name' },
        { type: 'string', label: 'Resource' },
        { type: 'date', label: 'Start Date' },
        { type: 'date', label: 'End Date' },
        { type: 'number', label: 'Duration' },
        { type: 'number', label: 'Percent Complete' },
        { type: 'string', label: 'Dependencies' },
      ];

      const rows = [
        ['2014Spring', 'Spring 2014', 'spring', new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
        ['2014Summer', 'Summer 2014', 'summer', new Date(2014, 5, 21), new Date(2014, 8, 20), null, 100, null],
        ['2014Autumn', 'Autumn 2014', 'autumn', new Date(2014, 8, 21), new Date(2014, 11, 20), null, 100, null],
        ['2014Winter', 'Winter 2014', 'winter', new Date(2014, 11, 21), new Date(2015, 2, 21), null, 100, null],
        ['2015Spring', 'Spring 2015', 'spring', new Date(2015, 2, 22), new Date(2015, 5, 20), null, 50, null],
        ['2015Summer', 'Summer 2015', 'summer', new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
        ['2015Autumn', 'Autumn 2015', 'autumn', new Date(2015, 8, 21), new Date(2015, 11, 20), null, 0, null],
        ['2015Winter', 'Winter 2015', 'winter', new Date(2015, 11, 21), new Date(2016, 2, 21), null, 0, null],
        ['Football', 'Football Season', 'sports', new Date(2014, 8, 4), new Date(2015, 1, 1), null, 100, null],
        ['Baseball', 'Baseball Season', 'sports', new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
        ['Basketball', 'Basketball Season', 'sports', new Date(2014, 9, 28), new Date(2015, 5, 20), null, 86, null],
        ['Hockey', 'Hockey Season', 'sports', new Date(2014, 9, 8), new Date(2015, 5, 21), null, 89, null],
      ];

      const data = [columns, ...rows];
      resolve(data);
    }, 500);
  });
};

export const getWorkspaceTimeline = (data: { workspaceId: string }): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        [
          { type: 'string', id: 'Position' },
          { type: 'string', id: 'Name' },
          { type: 'date', id: 'Start' },
          { type: 'date', id: 'End' },
        ],
        ['President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
        ['President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ['President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)],
        ['Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
        ['Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ['Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
        ['Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
        ['Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
        ['Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
        ['Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
        ['Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
        ['Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
        ['Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
        ['Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
        ['Secretary of State', 'Julia Max', new Date(1802, 7, 3), new Date(1809, 2, 3)],
        ['Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)],
        ['Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)],
        ['Secretary of State', 'JK Karina', new Date(1801, 4, 2), new Date(1809, 2, 3)],
        ['Secretary of State', 'Jolia Molina', new Date(1809, 2, 3), new Date(1811, 10, 3)],
      ];
      resolve(data);
    }, 500);
  });
};
