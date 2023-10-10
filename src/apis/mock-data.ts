import { Board } from '@/types/board.type';

/**
 * YouTube: TrungQuanDev - Một Lập Trình Viên
 * Created by trungquandev.com's author on Jun 28, 2023
 */
interface MockData {
  board: Board;
}

export const mockData: MockData = {
  board: {
    _id: 'board-id-01',
    title: 'Khoi Board',
    description: 'Pro MERN stack Course',
    type: 'public', // 'private'
    labels: [
      { _id: '1', title: 'Title 1', color: '#164b35' },
      { _id: '2', title: 'Title 2', color: '#2ecc71' },
      { _id: '3', title: 'Title 3', color: '#3498db' },
    ],
    ownerIds: [
      {
        _id: 'mem-1',
        name: 'Name',
        email: 'emailaaa@email.com',
        password: '123',
        avatar: 'https://i.pravatar.cc/',
        birthday: new Date(),
        gender: 'male',
        phoneNumber: '0123456789',
      },
    ], // Những users là Admin của board
    memberIds: [
      {
        _id: 'mem-1',
        name: 'Name',
        email: 'emailaaa@email.com',
        password: '123',
        avatar: 'https://i.pravatar.cc/',
        birthday: new Date(),
        gender: 'male',
        phoneNumber: '0123456789',
      },
      {
        _id: 'mem-2',
        name: 'Name 2',
        email: 'emailzzz@email.com',
        password: '123',
        avatar: 'https://i.pravatar.cc/',
        birthday: new Date(),
        gender: 'male',
        phoneNumber: '0123456789',
      },
    ], // Những users là member bình thường của board
    // eslint-disable-next-line max-len
    columnOrderIds: ['column-id-03', 'column-id-01', 'column-id-02', 'column-id-04'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    columns: [
      {
        _id: 'column-id-01',
        boardId: 'board-id-01',
        title: 'To Do Column 01',
        cardOrderIds: [
          'card-id-01',
          'card-id-02',
          'card-id-03',
          'card-id-04',
          'card-id-05',
          'card-id-06',
          'card-id-07',
        ],
        cards: [
          {
            _id: 'card-id-01',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 01',
            description: 'This is a description',
            cover:
              'https://trungquandev.com/wp-content/uploads/2022/07/fair-mern-stack-advanced-banner-trungquandev.jpg',
            memberIds: [
              {
                _id: 'mem-1',
                name: 'Name',
                email: 'emailaaa@email.com',
                password: '123',
                avatar: 'https://i.pravatar.cc/',
                birthday: new Date(),
                gender: 'male',
                phoneNumber: '0123456789',
              },
              {
                _id: 'mem-2',
                name: 'Name 2',
                email: 'emailzzz@email.com',
                password: '123',
                avatar: 'https://i.pravatar.cc/',
                birthday: new Date(),
                gender: 'male',
                phoneNumber: '0123456789',
              },
            ],
            comments: [
              {
                _id: 'cm1',
                avatarUrl: 'https://i.pravatar.cc/',
                username: 'Trần Đình Khôi',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                content: 'This is a comment',
              },
            ],
            attachments: [
              {
                _id: 'a1',
                url: '#',
                fileName: 'This is a file.pdf',
                extension: 'pdf',
                createdTime: new Date().getTime(),
              },
            ],
            checklists: [
              {
                _id: 'cl1',
                name: 'test zzz',
                items: [
                  {
                    _id: 'item-1',
                    title: '123',
                    isDone: false,
                  },
                  {
                    _id: 'item-2',
                    title: '456',
                    isDone: false,
                  },
                ],
              },
              {
                _id: 'cl2',
                name: 'test aaa',
                items: [
                  {
                    _id: 'item-3',
                    title: 'zzz',
                    isDone: false,
                  },
                  {
                    _id: 'item-4',
                    title: 'test 111',
                    isDone: false,
                  },
                ],
              },
            ],
            labels: [
              { _id: '1', title: 'Title 1', color: '#164b35' },
              { _id: '2', title: 'Title 2', color: '#2ecc71' },
            ],
            startDate: new Date('2002-09-13'),
            endDate: new Date('2023-10-10'),
            isDone: false,
          },
          {
            _id: 'card-id-02',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 02',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-03',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 03',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-04',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 04',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-05',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 05',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-06',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 06',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-07',
            boardId: 'board-id-01',
            columnId: 'column-id-01',
            title: 'Title of card 07',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
        ],
      },
      {
        _id: 'column-id-02',
        boardId: 'board-id-01',
        title: 'Inprogress Column 02',
        cardOrderIds: ['card-id-10', 'card-id-09', 'card-id-08'],
        cards: [
          {
            _id: 'card-id-08',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: 'Title of card 08',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-09',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: 'Title of card 09',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-10',
            boardId: 'board-id-01',
            columnId: 'column-id-02',
            title: 'Title of card 10',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
        ],
      },
      {
        _id: 'column-id-03',
        boardId: 'board-id-01',
        title: 'Done Column 03',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
        cards: [
          {
            _id: 'card-id-11',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: 'Title of card 11',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-12',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: 'Title of card 12',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-13',
            boardId: 'board-id-01',
            columnId: 'column-id-03',
            title: 'Title of card 13',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
        ],
      },
      {
        _id: 'column-id-04',
        boardId: 'board-id-01',
        title: 'Empty Column 04',
        cardOrderIds: ['column-id-04-placeholder-card'],
        cards: [
          {
            _id: 'column-id-04-placeholder-card',
            boardId: 'board-id-01',
            columnId: 'column-id-04',
            FE_isPlaceholderCard: true,
          },
        ],
      },
    ],
  },
};
1;
