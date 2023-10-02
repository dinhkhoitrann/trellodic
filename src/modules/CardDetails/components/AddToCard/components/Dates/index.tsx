import { Dayjs } from 'dayjs';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import DatesView from './view';
import { editDueDates } from '@/services/card/dates';
import withBoard from '@/hocs/withBoard';

type DatesProps = {
  boardId: string;
  cardId: string;
};

function Dates({ boardId, cardId }: DatesProps) {
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: editDueDates,
    onSuccess: () => {
      toast.success('Due dates saved successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSaveDueDate = (day: Dayjs) => {
    mutate({ dueDate: day.toDate(), cardId: cardId, boardId: boardId });
  };

  return <DatesView isPending={isPending} isSuccess={isSuccess} onSave={handleSaveDueDate} />;
}

export default withBoard(Dates);
