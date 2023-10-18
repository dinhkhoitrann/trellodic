import { useMarkCardIsDoneMutation } from '@/redux/services/card/dates';
import DatesView from './view';
import { withBoard, BoardGlobalProps } from '@/hocs';

function Dates({ cardId, boardId, onRefreshCard }: BoardGlobalProps) {
  const [markCardIsDone] = useMarkCardIsDoneMutation();

  const handleCheckDone = (isDone: boolean) => {
    markCardIsDone({
      cardId,
      boardId,
      isDone,
      onSuccess: onRefreshCard,
    });
  };

  return <DatesView onCheckDone={handleCheckDone} />;
}

export default withBoard(Dates);
