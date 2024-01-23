import { useRemoveMemberFromCardMutation } from '@/redux/services/card/member';
import { BoardGlobalProps, withBoard } from '@/hocs';
import MembersView from './view';

type MembersProps = BoardGlobalProps;

function Members({ cardId, onRefreshCard, onRefreshBoard }: MembersProps) {
  const [removeMember] = useRemoveMemberFromCardMutation();

  const handleRemoveMember = (memberId: string) => {
    removeMember({
      cardId,
      memberId,
      onSuccess: () => {
        onRefreshCard();
        onRefreshBoard();
      },
    });
  };

  return <MembersView onRemoveMember={handleRemoveMember} />;
}

export default withBoard(Members);
