import { Dayjs } from 'dayjs';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { useEditDueDateMutation } from '@/redux/services/card/dates';
import DatesView from './view';

function Dates({ boardId, cardId, onRefreshCard }: BoardGlobalProps) {
  const [editDueDates, { isLoading, isSuccess }] = useEditDueDateMutation();

  const handleSaveDueDate = (startDate: Dayjs, endDate: Dayjs) => {
    editDueDates({
      startDate: startDate.toDate(),
      endDate: endDate.toDate(),
      cardId,
      boardId,
      onSuccess: onRefreshCard,
    });
  };

  return <DatesView isPending={isLoading} isSuccess={isSuccess} onSave={handleSaveDueDate} />;
}

export default withBoard(Dates);
