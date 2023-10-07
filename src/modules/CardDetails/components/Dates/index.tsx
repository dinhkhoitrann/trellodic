import { useMarkCardIsDoneMutation } from '@/redux/services/card/dates';
import DatesView from './view';
import withBoard, { BoardGlobalProps } from '@/hocs/withBoard';
import { toast } from 'react-toastify';

function Dates({ cardId, boardId, onRefreshCard }: BoardGlobalProps) {
  const [markCardIsDone] = useMarkCardIsDoneMutation();

  const handleCheckDone = (isDone: boolean) => {
    markCardIsDone({
      cardId,
      boardId,
      isDone,
      onSuccess: onRefreshCard,
      onFailed: (errMsg) => {
        toast.error(errMsg);
      },
    });
  };

  return <DatesView onCheckDone={handleCheckDone} />;
}

export default withBoard(Dates);
