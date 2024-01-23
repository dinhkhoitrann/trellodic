import { Dayjs } from 'dayjs';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { useDeleteDatesMutation, useEditDueDateMutation } from '@/redux/services/card/dates';
import DatesView from './view';

function Dates({ card, cardId, onRefreshCard, onRefreshBoard }: BoardGlobalProps) {
  const [editDueDates, { isLoading, isSuccess }] = useEditDueDateMutation();
  const [removeDates] = useDeleteDatesMutation();

  const handleSaveDueDate = (startDate: Dayjs, endDate: Dayjs) => {
    editDueDates({
      startDate: startDate.toDate().toISOString(),
      endDate: endDate.toDate().toISOString(),
      cardId,
      onSuccess: () => {
        onRefreshCard();
        onRefreshBoard();
      },
    });
  };

  const handleRemoveDates = () => {
    removeDates({
      cardId,
      onSuccess: () => {
        onRefreshCard();
        onRefreshBoard();
      },
    });
  };

  return (
    <DatesView
      card={card}
      isPending={isLoading}
      isSuccess={isSuccess}
      onSave={handleSaveDueDate}
      onRemoveDates={handleRemoveDates}
    />
  );
}

export default withBoard(Dates);
