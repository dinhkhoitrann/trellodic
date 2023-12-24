import { Dayjs } from 'dayjs';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { useDeleteDatesMutation, useEditDueDateMutation } from '@/redux/services/card/dates';
import DatesView from './view';

function Dates({ card, cardId, onRefreshCard }: BoardGlobalProps) {
  const [editDueDates, { isLoading, isSuccess }] = useEditDueDateMutation();
  const [removeDates] = useDeleteDatesMutation();

  const handleSaveDueDate = (startDate: Dayjs, endDate: Dayjs) => {
    editDueDates({
      startDate: startDate.toDate().toISOString(),
      endDate: endDate.toDate().toISOString(),
      cardId,
      onSuccess: onRefreshCard,
    });
  };

  const handleRemoveDates = () => {
    removeDates({ cardId, onSuccess: onRefreshCard });
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
