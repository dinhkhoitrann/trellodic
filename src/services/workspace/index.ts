import { mockWorkspace } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const createBoard = async ({ signal, ...rest }: { name: string; workspaceId: string; signal: AbortSignal }) => {
  return externalRequest.post('/boards', rest, { signal });
};

export const getWorkspace = async (data: { workspaceId: string; signal: AbortSignal }) => {
  const { workspaceId, signal } = data;
  await externalRequest.get(`https://jsonplaceholder.typicode.com/posts/${workspaceId}`, { signal });
  return { ...mockWorkspace, name: `W${workspaceId}`, _id: workspaceId };
};

export const getWorkspaceList = async (data: { userId: string; signal: AbortSignal }) => {
  const { userId, signal } = data;
  await externalRequest.get(`https://jsonplaceholder.typicode.com/posts/${userId}`, { signal });
  return [
    mockWorkspace,
    {
      ...mockWorkspace,
      name: 'fff',
      _id: '655499fe3b7dba7af3972bd7',
    },
  ];
};

export const editWorkspaceName = ({ signal, ...rest }: { workspaceId: string; name: string; signal: AbortSignal }) => {
  return externalRequest.post('https://jsonplaceholder.typicode.com/posts', rest, { signal });
};

export const createWorkspace = ({ signal, ...rest }: { name: string; signal: AbortSignal }) => {
  return externalRequest.post('/workspaces', rest, { signal });
};

export const getWorkspaceMembers = async (data: { workspaceId: string | undefined }) => {
  const { workspaceId } = data;
  await externalRequest.get('https://jsonplaceholder.typicode.com/posts/1');
  return {
    data: {
      members: [
        {
          _id: '1',
          name: 'Member 1',
        },
        {
          _id: '2',
          name: 'Member 2',
        },
      ],
    },
  };
};
