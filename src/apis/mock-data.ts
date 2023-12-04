import { Board } from '@/types/board.type';
import { User } from '@/types/user.type';
import { Workspace } from '@/types/workspace.type';
import { Notification } from '@/types/noti.type';
import { SearchResults } from '@/types/search.type';

/**
 * YouTube: TrungQuanDev - Một Lập Trình Viên
 * Created by trungquandev.com's author on Jun 28, 2023
 */
interface MockBoardData {
  board: Board;
}

export const mockData: MockBoardData = {
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
    admin: {
      _id: 'mem-1',
      name: 'Name',
      email: 'emailaaa@email.com',
      password: '123',
      avatar: 'https://i.pravatar.cc/',
      birthday: '2023-11-02T15:56:37.145Z',
      gender: 'male',
      phoneNumber: '0123456789',
      isVerified: true,
      type: 'INTERNAL',
    }, // Những users là Admin của board
    memberIds: [
      {
        _id: 'mem-1',
        name: 'Name',
        email: 'emailaaa@email.com',
        password: '123',
        avatar: 'https://i.pravatar.cc/',
        birthday: '2023-11-02T15:56:37.145Z',
        gender: 'male',
        phoneNumber: '0123456789',
        isVerified: true,
        type: 'INTERNAL',
      },
      {
        _id: 'mem-2',
        name: 'Name',
        email: 'emailaaa@email.com',
        password: '123',
        avatar: 'https://i.pravatar.cc/',
        birthday: '2023-11-02T15:56:37.145Z',
        gender: 'male',
        phoneNumber: '0123456789',
        isVerified: true,
        type: 'INTERNAL',
      },
    ], // Những users là member bình thường của board
    // eslint-disable-next-line max-len
    columnOrderIds: ['column-id-03', 'column-id-01', '6565fa8beb98533ca7dfb136', 'column-id-04'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
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
              // eslint-disable-next-line max-len
              'https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            memberIds: [
              {
                _id: 'mem-1',
                name: 'Name',
                email: 'emailaaa@email.com',
                password: '123',
                avatar: 'https://i.pravatar.cc/',
                birthday: '2023-11-02T15:56:37.145Z',
                gender: 'male',
                phoneNumber: '0123456789',
                isVerified: true,
                type: 'INTERNAL',
              },
              {
                _id: 'mem-2',
                name: 'Name',
                email: 'emailaaa@email.com',
                password: '123',
                avatar: 'https://i.pravatar.cc/',
                birthday: '2023-11-02T15:56:37.145Z',
                gender: 'male',
                phoneNumber: '0123456789',
                isVerified: true,
                type: 'INTERNAL',
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
                createdTime: new Date().getTime().toString(),
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
            startDate: new Date('2002-09-13').toISOString(),
            endDate: new Date('2023-10-10').toISOString(),
            isDone: true,
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
            endDate: new Date('2023-12-31').toISOString(),
            isDone: true,
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
            isDone: true,
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
            isDone: false,
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
            isDone: false,
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
            isDone: false,
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
        _id: '6565fa8beb98533ca7dfb136',
        boardId: 'board-id-01',
        title: 'Inprogress Column 02',
        cardOrderIds: ['655497a43b7dba7af3972bd4', 'card-id-09', 'card-id-08'],
        cards: [
          {
            _id: 'card-id-08',
            boardId: 'board-id-01',
            columnId: '6565fa8beb98533ca7dfb136',
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
            columnId: '6565fa8beb98533ca7dfb136',
            title: 'Title of card 09',
            description: '',
            cover: '',
            memberIds: [],
            comments: [],
            attachments: [],
          },
          {
            _id: '6565f63deb98533ca7dfb133',
            boardId: 'board-id-01',
            columnId: '6565fa8beb98533ca7dfb136',
            title: 'Title of card 10',
            description: '',
            cover:
              // eslint-disable-next-line max-len
              'http://res.cloudinary.com/promagnet/image/upload/v1700119194/1700119194031518774/abstract-background-6m6cjbifu3zpfv84.jpg.jpg',
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

export const mockWorkspace: Workspace = {
  _id: '655499f53b7dba7af3972bd6',
  boards: [
    {
      _id: '6566ed0d4f3cc86fadda52dc',
      title: 'test create board 222',
      admin: '655497333b7dba7af3972bd3',
    },
    {
      _id: '6566eca44f3cc86fadda52db',
      title: '20520224111zzz',
      admin: '655497333b7dba7af3972bd3',
    },
  ],
  createdAt: '1700043253986',
  updatedAt: '1700043253986',
  ownerUserId: '655497333b7dba7af3972bd3',
  name: '222',
  image: 'https://img.fruugo.com/product/2/87/557318872_max.jpg',
  memberIds: ['655497333b7dba7af3972bd3'],
};

export const mockUser: User = {
  _id: '6543c6b511106cb6c9c5bad2',
  createdAt: '2023-11-02T15:56:37.145Z',
  updatedAt: '2023-11-02T15:57:41.862Z',
  email: '20520224@gm.uit.edu.vn',
  name: 'Khoi Tran',
  avatar: 'https://simulacionymedicina.es/wp-content/uploads/2015/11/default-avatar-300x300-1.jpg',
  phoneNumber: '0349175927',
  birthday: '2023-10-10T15:55:50Z',
  isVerified: true,
  type: 'INTERNAL',
};

export const mockNotifs: Notification[] = [
  {
    _id: 'n1',
    triggeredBy: 'Tran Dinh Khoi',
    activity: 'upload an attachment to Learn ReactJS card',
    createdOn: new Date('10/12/2023').toISOString(),
    isRead: false,
  },
  {
    _id: 'n2',
    triggeredBy: 'Tran Dinh Khoi',
    activity: 'add a description to Learn NextJS card',
    createdOn: new Date('10/12/2023').toISOString(),
    isRead: true,
  },
];

export const mockSearchResult: SearchResults = {
  cards: [
    {
      _id: '6565f63deb98533ca7dfb133',
      boardId: '1',
      cardTitle: 'Learn ReactJS',
      boardTitle: 'Board learn ReactJS',
      cardCover:
        // eslint-disable-next-line max-len
        'https://res.cloudinary.com/promagnet/image/upload/v1700119194/1700119194031518774/abstract-background-6m6cjbifu3zpfv84.jpg.jpg',
    },
  ],
  boards: [
    {
      _id: '1',
      boardCover:
        // eslint-disable-next-line max-len
        'https://res.cloudinary.com/promagnet/image/upload/v1700119194/1700119194031518774/abstract-background-6m6cjbifu3zpfv84.jpg.jpg',
      boardTitle: 'Learn Git',
      workspaceTitle: 'Learn Testing',
    },
    {
      _id: '2',
      boardTitle: 'Learn AWS',
      workspaceTitle: 'Learn BE',
    },
  ],
  workspaces: [
    {
      _id: '1',
      workspaceTitle: 'Workspace for learning web development',
      workspaceImage:
        // eslint-disable-next-line max-len
        'https://res.cloudinary.com/promagnet/image/upload/v1700119194/1700119194031518774/abstract-background-6m6cjbifu3zpfv84.jpg.jpg',
    },
    {
      _id: '2',
      workspaceTitle: 'Workspace for learning HTML',
    },
  ],
};
