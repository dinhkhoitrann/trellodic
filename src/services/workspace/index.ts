import { mockWorkspace } from '@/apis/mock-data';
import { externalRequest } from '../request';
import { getHeaders } from '../util';

export const createBoard = async (data: { name: string; workspaceId: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  return externalRequest.post('http://localhost:8080/api/v1/boards', rest, { signal, ...getHeaders() });
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
      _id: '6535cb2d3a66ba004f83df63',
    },
  ];
};

export const editWorkspaceName = async (data: { workspaceId: string; name: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  return externalRequest.post('/posts', rest, { signal });
};

export const createWorkspace = async (data: { name: string; signal: AbortSignal }) => {
  const { signal, ...rest } = data;
  return externalRequest.post('http://localhost:8080/api/v1/workspaces', rest, { signal, ...getHeaders() });
};
