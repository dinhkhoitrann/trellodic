import { User } from '@/types/user.type';
import MembersView from './view';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { useAddMembersToCardMutation } from '@/redux/services/card/member';

function Members({ cardId, boardId, onRefreshCard }: BoardGlobalProps) {
  const [addMembers, { isLoading }] = useAddMembersToCardMutation();

  const handleAddMember = (members: User[]) => {
    const memberIds = members.map((mem) => mem._id);
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
