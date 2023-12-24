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
        ['2014Spring', 'Fix production bugs', 'New', new Date(2014, 2, 22), new Date(2014, 5, 20), null, 100, null],
        [
          '2014Summer',
          'Choose technologies',
          'In Development',
          new Date(2014, 5, 21),
          new Date(2014, 8, 20),
          null,
          100,
          null,
        ],
        [
          '2014Autumn',
          'Support release',
          'In Development',
          new Date(2014, 8, 21),
          new Date(2014, 11, 20),
          null,
          100,
          null,
        ],
        [
          '2014Winter',
          'Guaranteeing product is optimized',
          'Dev Done',
          new Date(2014, 11, 21),
          new Date(2015, 2, 21),
          null,
          100,
          null,
        ],
        [
          '2015Spring',
          'Implement payment feature',
          'Dev Done',
          new Date(2015, 2, 22),
          new Date(2015, 5, 20),
          null,
          50,
          null,
        ],
        ['2015Summer', 'Fix existing bugs', 'Dev Done', new Date(2015, 5, 21), new Date(2015, 8, 20), null, 0, null],
        [
          '2015Autumn',
          'Implement wishlist feature',
          'In Peer Review',
          new Date(2015, 8, 21),
          new Date(2015, 11, 20),
          null,
          0,
          null,
        ],
        [
          '2015Winter',
          'Implement discount feature',
          'In Peer Review',
          new Date(2015, 11, 21),
          new Date(2016, 2, 21),
          null,
          0,
          null,
        ],
        [
          'Football',
          'Improve performance',
          'In Peer Review',
          new Date(2014, 8, 4),
          new Date(2015, 1, 1),
          null,
          100,
          null,
        ],
        ['Baseball', 'Baseball Season', 'In Peer Review', new Date(2015, 2, 31), new Date(2015, 9, 20), null, 14, null],
        [
          'Basketball',
          'Implement list product feature',
          'In Development',
          new Date(2014, 9, 28),
          new Date(2015, 5, 20),
          null,
          86,
          null,
        ],
        [
          'Hockey',
          'Implement cart feature',
          'In Development',
          new Date(2014, 9, 8),
          new Date(2015, 5, 21),
          null,
          89,
          null,
        ],
      ];

      const data = [columns, ...rows];
      resolve(data);
    }, 500);
  });
};

export const getWorkspaceTimeline = (data: { workspaceId: string; time: string }): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        [
          { type: 'string', id: 'Team' },
          { type: 'string', id: 'Mission' },
          { type: 'date', id: 'Start' },
          { type: 'date', id: 'End' },
        ],
        ['Team Marketing', 'Managing social media presence', new Date(1789, 3, 30), new Date(1797, 2, 4)],
        ['Team Marketing', 'Conducting market research', new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ['Team Marketing', 'Overseeing outside vendors and agencies', new Date(1801, 2, 4), new Date(1809, 2, 4)],
        ['Team Dev', 'Choose technologies', new Date(1789, 3, 21), new Date(1797, 2, 4)],
        ['Team Dev', 'Support release', new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ['Team Dev', 'Guaranteeing product is optimized', new Date(1801, 2, 4), new Date(1805, 2, 4)],
        ['Team Dev', 'Merge code', new Date(1809, 2, 3), new Date(1811, 10, 3)],
        ['Team Dev', 'Implement list product feature', new Date(1789, 8, 25), new Date(1790, 2, 22)],
        ['Team Dev', 'Implement cart feature', new Date(1790, 2, 22), new Date(1793, 11, 31)],
        ['Team Dev', 'Implement wishlist feature', new Date(1801, 4, 2), new Date(1809, 2, 3)],
        ['Team Dev', 'Fix production bugs', new Date(1795, 7, 20), new Date(1800, 4, 12)],
        ['Team Dev', 'Implement payment feature', new Date(1800, 4, 13), new Date(1800, 5, 5)],
        ['Team Dev', 'Implement authentication feature', new Date(1801, 4, 2), new Date(1809, 2, 3)],
        ['Team Dev', 'Implement discount feature', new Date(1801, 2, 5), new Date(1801, 4, 1)],
        ['Team Dev', 'Improve performance', new Date(1801, 4, 2), new Date(1809, 2, 3)],
      ];
      resolve(data);
    }, 500);
  });
};
