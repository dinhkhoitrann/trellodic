import { useGetWorkspaceListQuery } from '@/redux/services/workspace/workspace';
import SectionsView from './view';
import { getBoardsForSections } from './service';

function Sections() {
  // TODO: get user id from somewhere and replace '1' to that id
  const { data } = useGetWorkspaceListQuery(
    {
      userId: '1',
    },
    { pollingInterval: 60000 * 5 },
  );
  const { ownerBoards, otherBoards } = getBoardsForSections('1', data || []);

  return <SectionsView ownerBoards={ownerBoards} otherBoards={otherBoards} />;
}

export default Sections;
