import SectionsView from './view';
import { getBoardsForSections } from './service';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';

function Sections() {
  // TODO: get user id from somewhere and replace '1' to that id
  const workspace = useAppSelector(selectWorkspaceDetails);
  const { ownerBoards, otherBoards } = getBoardsForSections('1', workspace);

  return <SectionsView ownerBoards={ownerBoards} otherBoards={otherBoards} workspace={workspace} />;
}

export default Sections;
