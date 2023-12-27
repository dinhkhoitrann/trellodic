import { mockWorkspace } from '@/apis/mock-data';
import { externalRequest } from '../request';

export const createBoard = async ({ signal, ...rest }: { name: string; workspaceId: string; signal: AbortSignal }) => {
  return externalRequest.post('/boards', rest, { signal });
};

export const getWorkspace = async ({ workspaceId, signal }: { workspaceId: string; signal: AbortSignal }) => {
  const response = await externalRequest.get(`/workspaces/${workspaceId}`, { signal });
  return response.data;
};

export const getWorkspaceList = async (data: { userId: string; signal: AbortSignal }) => {
  const { userId, signal } = data;
  await externalRequest.get(`https://jsonplaceholder.typicode.com/posts/${userId}`, { signal });
  return [
    mockWorkspace,
    {
      ...mockWorkspace,
      name: 'Ads Project',
      _id: '658bf4f1189ef377faa92869',
    },
  ];
};

export const editWorkspace = ({
  workspaceId,
  signal,
  ...rest
}: {
  workspaceId: string;
  name?: string;
  signal: AbortSignal;
}) => {
  return externalRequest.patch(`/workspaces/${workspaceId}`, rest, { signal });
};

export const createWorkspace = ({ signal, ...rest }: { name: string; signal: AbortSignal }) => {
  return externalRequest.post('/workspaces', rest, { signal });
};

export const inviteUsers = ({
  workspaceId,
  signal,
  ...rest
}: {
  workspaceId: string;
  userIds: string[];
  signal: AbortSignal;
}) => {
  return externalRequest.post(`/workspaces/${workspaceId}/members`, rest, { signal });
};

export const getUsersToAddToWorkspace = async ({ workspaceId, email }: { workspaceId: string; email: string }) => {
  const response = await externalRequest.get(`/users/to-add-to-workspace?workspaceId=${workspaceId}&emailQ=${email}`);
  return response.data;
};

export const removeMember = ({
  workspaceId,
  memberId,
  signal,
}: {
  workspaceId: string;
  memberId: string;
  signal: AbortSignal;
}) => {
  return externalRequest.delete(`/workspaces/${workspaceId}/members/${memberId}`, { signal });
};
