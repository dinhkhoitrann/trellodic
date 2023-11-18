import { Workspace } from '@/types/workspace.type';

export const getWorkspaces = (workspaces: Partial<Workspace>[], userId: string) => {
  const guestWorkspaces: Partial<Workspace>[] = [];
  const ownerWorkspaces: Partial<Workspace>[] = [];
  workspaces.forEach((workspace) => {
    if (workspace.ownerUserId === userId) {
      ownerWorkspaces.push(workspace);
    } else {
      guestWorkspaces.push(workspace);
    }
  });
  return {
    guestWorkspaces,
    ownerWorkspaces,
  };
};
