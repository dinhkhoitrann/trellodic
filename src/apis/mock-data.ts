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
    _id: '65801e154467ac2c53130b40',
    workspaceId: '658bf4e3189ef377faa92867',
    title: 'Khoi Board',
    description: 'Pro MERN stack Course',
    type: 'public', // 'private'
    labels: [
      { _id: '658ef0f0d908a651fa676768', title: 'Title 1', color: '#164b35' },
      { _id: '658c4dc12b7fb2f7fc25290b', title: 'Title 2', color: '#2ecc71' },
      { _id: '658c4dcb2b7fb2f7fc25290c', title: 'Title 3', color: '#3498db' },
    ],
    admin: '657ffaa34467ac2c53130b3b', // Những users là Admin của board
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
    columnOrderIds: ['column-id-03', 'column-id-01', '658015154467ac2c53130b3f', 'column-id-04'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
    columns: [
      {
        _id: 'column-id-01',
        boardId: '65801e154467ac2c53130b40',
        title: 'New',
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
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-01',
            title: 'Fix production bugs',
            description: 'This is a description',
            cover:
              // eslint-disable-next-line max-len
              'https://images.unsplash.com/photo-1682685797660-3d847763208e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            members: [
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
                author: { _id: '1', name: 'Khôi Trần', avatar: '' },
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
            isDone: false,
          },
          {
            _id: 'card-id-02',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-01',
            title: 'Choose technologies',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
            endDate: new Date('2023-12-31').toISOString(),
            isDone: true,
          },
          {
            _id: 'card-id-03',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-01',
            title: 'Support release',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
            isDone: false,
            endDate: new Date('2023-12-5').toISOString(),
          },
          {
            _id: 'card-id-04',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-01',
            title: 'Guaranteeing product is optimized',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
            isDone: false,
            endDate: new Date('2023-12-22').toISOString(),
          },
          {
            _id: 'card-id-05',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-01',
            title: 'Merge code',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
            isDone: false,
          },
          {
            _id: 'card-id-06',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-01',
            title: 'Implement list product feature',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
            isDone: false,
          },
          {
            _id: 'card-id-07',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-01',
            title: 'Implement cart feature',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
          },
        ],
      },
      {
        _id: '658015154467ac2c53130b3f',
        boardId: '65801e154467ac2c53130b40',
        title: 'In Development',
        cardOrderIds: ['655497a43b7dba7af3972bd4', 'card-id-09', 'card-id-08'],
        cards: [
          {
            _id: 'card-id-08',
            boardId: '65801e154467ac2c53130b40',
            columnId: '658015154467ac2c53130b3f',
            title: 'Implement wishlist feature',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-09',
            boardId: '65801e154467ac2c53130b40',
            columnId: '658015154467ac2c53130b3f',
            title: 'Fix existing bugs',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
          },
          {
            _id: '65801f6f4467ac2c53130b42',
            boardId: '65801e154467ac2c53130b40',
            columnId: '658015154467ac2c53130b3f',
            title: 'Implement payment feature',
            description: '',
            cover:
              // eslint-disable-next-line max-len
              'http://res.cloudinary.com/promagnet/image/upload/v1700119194/1700119194031518774/abstract-background-6m6cjbifu3zpfv84.jpg.jpg',
            members: [],
            comments: [],
            attachments: [],
          },
        ],
      },
      {
        _id: 'column-id-03',
        boardId: '65801e154467ac2c53130b40',
        title: 'In Peer Review',
        cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
        cards: [
          {
            _id: 'card-id-11',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-03',
            title: 'Implement authentication feature',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-12',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-03',
            title: 'Implement discount feature',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
          },
          {
            _id: 'card-id-13',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-03',
            title: 'Improve performance',
            description: '',
            cover: '',
            members: [],
            comments: [],
            attachments: [],
          },
        ],
      },
      {
        _id: 'column-id-04',
        boardId: '65801e154467ac2c53130b40',
        title: 'Dev Done',
        cardOrderIds: ['column-id-04-placeholder-card'],
        cards: [
          {
            _id: 'column-id-04-placeholder-card',
            boardId: '65801e154467ac2c53130b40',
            columnId: 'column-id-04',
            FE_isPlaceholderCard: true,
          },
        ],
      },
    ],
  },
};

export const filteredBoard: Board = {
  _id: '65801e154467ac2c53130b40',
  workspaceId: '658bf4e3189ef377faa92867',
  title: 'Khoi Board',
  description: 'Pro MERN stack Course',
  type: 'public', // 'private'
  labels: [
    { _id: '1', title: 'Title 1', color: '#164b35' },
    { _id: '2', title: 'Title 2', color: '#2ecc71' },
    { _id: '3', title: 'Title 3', color: '#3498db' },
  ],
  admin: '657ffaa34467ac2c53130b3b', // Những users là Admin của board
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
  columnOrderIds: ['column-id-03', 'column-id-01', '658015154467ac2c53130b3f', 'column-id-04'], // Thứ tự sắp xếp / vị trí của các Columns trong 1 boards
  columns: [
    {
      _id: 'column-id-01',
      boardId: '65801e154467ac2c53130b40',
      title: 'New',
      cardOrderIds: ['card-id-01', 'card-id-02', 'card-id-03', 'card-id-04', 'card-id-05', 'card-id-06', 'card-id-07'],
      cards: [
        {
          _id: 'card-id-05',
          boardId: '65801e154467ac2c53130b40',
          columnId: 'column-id-01',
          title: 'Merge code',
          description: '',
          cover: '',
          members: [],
          comments: [],
          attachments: [],
          isDone: false,
        },
        {
          _id: 'card-id-06',
          boardId: '65801e154467ac2c53130b40',
          columnId: 'column-id-01',
          title: 'Implement list product feature',
          description: '',
          cover: '',
          members: [],
          comments: [],
          attachments: [],
          isDone: false,
        },
        {
          _id: 'card-id-07',
          boardId: '65801e154467ac2c53130b40',
          columnId: 'column-id-01',
          title: 'Implement cart feature',
          description: '',
          cover: '',
          members: [],
          comments: [],
          attachments: [],
        },
      ],
    },
    {
      _id: '658015154467ac2c53130b3f',
      boardId: '65801e154467ac2c53130b40',
      title: 'In Development',
      cardOrderIds: ['655497a43b7dba7af3972bd4', 'card-id-09', 'card-id-08'],
      cards: [
        {
          _id: 'card-id-08',
          boardId: '65801e154467ac2c53130b40',
          columnId: '658015154467ac2c53130b3f',
          title: 'Implement wishlist feature',
          description: '',
          cover: '',
          members: [],
          comments: [],
          attachments: [],
        },
        {
          _id: 'card-id-09',
          boardId: '65801e154467ac2c53130b40',
          columnId: '658015154467ac2c53130b3f',
          title: 'Fix existing bugs',
          description: '',
          cover: '',
          members: [],
          comments: [],
          attachments: [],
        },
        {
          _id: '6565f63deb98533ca7dfb133',
          boardId: '65801e154467ac2c53130b40',
          columnId: '658015154467ac2c53130b3f',
          title: 'Implement payment feature',
          description: '',
          cover:
            // eslint-disable-next-line max-len
            'http://res.cloudinary.com/promagnet/image/upload/v1700119194/1700119194031518774/abstract-background-6m6cjbifu3zpfv84.jpg.jpg',
          members: [],
          comments: [],
          attachments: [],
        },
      ],
    },
    {
      _id: 'column-id-03',
      boardId: '65801e154467ac2c53130b40',
      title: 'In Peer Review',
      cardOrderIds: ['card-id-11', 'card-id-12', 'card-id-13'],
      cards: [
        {
          _id: 'card-id-11',
          boardId: '65801e154467ac2c53130b40',
          columnId: 'column-id-03',
          title: 'Implement authentication feature',
          description: '',
          cover: '',
          members: [],
          comments: [],
          attachments: [],
        },
        {
          _id: 'card-id-12',
          boardId: '65801e154467ac2c53130b40',
          columnId: 'column-id-03',
          title: 'Implement discount feature',
          description: '',
          cover: '',
          members: [],
          comments: [],
          attachments: [],
        },
        {
          _id: 'card-id-13',
          boardId: '65801e154467ac2c53130b40',
          columnId: 'column-id-03',
          title: 'Improve performance',
          description: '',
          cover: '',
          members: [],
          comments: [],
          attachments: [],
        },
      ],
    },
    {
      _id: 'column-id-04',
      boardId: '65801e154467ac2c53130b40',
      title: 'Dev Done',
      cardOrderIds: ['column-id-04-placeholder-card'],
      cards: [
        {
          _id: 'column-id-04-placeholder-card',
          boardId: '65801e154467ac2c53130b40',
          columnId: 'column-id-04',
          FE_isPlaceholderCard: true,
        },
      ],
    },
  ],
};

export const mockWorkspace: Workspace = {
  _id: '658bf4e3189ef377faa92867',
  boards: [
    {
      _id: '657ffe414467ac2c53130b3e',
      title: 'Team Marketing',
      admin: '657ffaa34467ac2c53130b3b',
    },
    {
      _id: '65801e154467ac2c53130b40',
      title: 'Team Dev',
      admin: '657ffaa34467ac2c53130b3b',
    },
  ],
  createdAt: '1700043253986',
  updatedAt: '1700043253986',
  ownerUserId: '657ffaa34467ac2c53130b3b',
  name: 'E-commerce website',
  image: 'https://img.fruugo.com/product/2/87/557318872_max.jpg',
  members: [{ _id: '657ffaa34467ac2c53130b3b', name: 'Khôi Trần 111', avatar: '' }],
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
