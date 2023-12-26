import { withBoard, BoardGlobalProps } from '@/hocs';
import { useAddMembersToCardMutation } from '@/redux/services/card/member';
import MembersView from './view';

function Members({ cardId, onRefreshCard }: BoardGlobalProps) {
  const [addMembers, { isLoading: isSaving }] = useAddMembersToCardMutation();

  const handleAddMember = (userIds: string[]) => {
    addMembers({
      userIds,
      cardId,
      onSuccess: onRefreshCard,
    });
  };

  return <MembersView isSaving={isSaving} onAddMember={handleAddMember} />;
}

export default withBoard(Members);
