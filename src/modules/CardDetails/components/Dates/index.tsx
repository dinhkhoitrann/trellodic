import { useEditCardMutation } from '@/redux/services/card/card';
import { withBoard, BoardGlobalProps } from '@/hocs';
import DatesView from './view';

function Dates({ cardId, boardId }: BoardGlobalProps) {
  const [markCardIsDone, { isLoading }] = useEditCardMutation();

  const handleCheckDone = (isDone: boolean) => {
    markCardIsDone({
      cardId,
      boardId,
      isDone,
    });
  };

  return <DatesView onCheckDone={handleCheckDone} isLoading={isLoading} />;
}

export default withBoard(Dates);
