import { withBoard, BoardGlobalProps } from '@/hocs';
import { useAddMembersToCardMutation } from '@/redux/services/card/member';
import MembersView from './view';

function Members({ cardId, boardId, onRefreshCard }: BoardGlobalProps) {
  const [addMembers, { isLoading }] = useAddMembersToCardMutation();

  const handleAddMember = (memberIds: string[]) => {
    addMembers({
      memberIds,
      cardId,
      boardId,
      onSuccess: onRefreshCard,
    });
  };

  return <MembersView isSaving={isLoading} onAddMember={handleAddMember} />;
}

export default withBoard(Members);
