import { mockWorkspace } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const createBoard = async (data: { boardTitle: string; workspaceId: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  return externalRequest.post('/posts', rest, { signal });
};

export const getWorkspace = async (data: { workspaceId: string; signal: AbortSignal }) => {
  const { workspaceId, signal } = data;
  await externalRequest.get(`/posts/${workspaceId}`, { signal });
  return { ...mockWorkspace, name: `W${workspaceId}`, _id: workspaceId };
};

export const getWorkspaceList = async (data: { userId: string; signal: AbortSignal }) => {
  const { userId, signal } = data;
  await externalRequest.get(`/posts/${userId}`, { signal });
  return [
    mockWorkspace,
    {
      ...mockWorkspace,
      name: 'W2',
      boards: [
        {
          _id: '2',
          title: 'aaa',
          admin: '2',
        },
      ],
      _id: '2',
    },
  ];
};

export const editWorkspaceName = async (data: { workspaceId: string; name: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  return externalRequest.post('/posts', rest, { signal });
};
