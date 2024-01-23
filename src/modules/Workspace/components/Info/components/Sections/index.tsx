import SectionsView from './view';
import { getBoardsForSections } from './service';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import { selectUserProfile } from '@/redux/slices/user';

function Sections() {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const user = useAppSelector(selectUserProfile);
  const { ownerBoards, otherBoards } = getBoardsForSections(workspace, user?._id);

  return <SectionsView ownerBoards={ownerBoards} otherBoards={otherBoards} workspace={workspace} />;
}

export default Sections;
