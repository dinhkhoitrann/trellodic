import { useAppSelector } from '@/redux/store';
import { selectBoardDetails } from '@/redux/slices/board';
import { selectUserProfile } from '@/redux/slices/user';

function checkBoardAdmin(adminId: string | undefined, userId: string | undefined) {
  if (!adminId || !userId) return false;
  return adminId === userId;
}

export default function useAuthorized() {
  const board = useAppSelector(selectBoardDetails);
  const user = useAppSelector(selectUserProfile);
  const isBoardAdmin = checkBoardAdmin(board.admin as string, user?._id);

  return {
    isBoardAdmin,
  };
}
