import { useAppSelector } from '@/redux/store';
import { selectBoardDetails } from '@/redux/slices/board';
import { selectUserProfile } from '@/redux/slices/user';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';

function checkBoardAdmin(adminId: string | undefined, userId: string | undefined) {
  if (!adminId || !userId) return false;
  return adminId === userId;
}

function checkWorkspaceAdmin(ownerId: string | undefined, userId: string | undefined) {
  if (!ownerId || !userId) return false;
  return ownerId === userId;
}

export default function useAuthorized() {
  const board = useAppSelector(selectBoardDetails);
  const workspace = useAppSelector(selectWorkspaceDetails);
  const user = useAppSelector(selectUserProfile);

  const isBoardAdmin = checkBoardAdmin(board.admin as string, user?._id);
  const isWorkspaceAdmin = checkWorkspaceAdmin(workspace.ownerUserId, user?._id);

  return {
    isBoardAdmin,
    isWorkspaceAdmin,
  };
}
