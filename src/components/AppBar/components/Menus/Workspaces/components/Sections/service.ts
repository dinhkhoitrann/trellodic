import { Workspace } from '@/types/workspace.type';

export const getWorkspaces = (workspaces: Partial<Workspace>[], userId: string | undefined) => {
  const guestWorkspaces: Partial<Workspace>[] = [];
  const ownerWorkspaces: Partial<Workspace>[] = [];

  if (!userId) return { guestWorkspaces, ownerWorkspaces };

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
