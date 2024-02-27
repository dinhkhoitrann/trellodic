import { useRemoveMemberMutation } from '@/redux/services/workspace/workspace';
import { useAppSelector } from '@/redux/store';
import { selectWorkspaceDetails } from '@/redux/slices/workspace';
import ListView from './view';

function List() {
  const workspace = useAppSelector(selectWorkspaceDetails);
  const [removeMember] = useRemoveMemberMutation();

  const handleRemoveMember = (memberId: string) => {
    removeMember({ memberId, workspaceId: workspace._id! });
  };

  return <ListView onRemoveMember={handleRemoveMember} />;
}

export default List;
