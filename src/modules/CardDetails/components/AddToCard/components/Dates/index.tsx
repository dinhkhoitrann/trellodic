import { useParams, useSearchParams } from 'next/navigation';
import { Dayjs } from 'dayjs';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import DatesView from './view';
import { editDueDates } from '@/services/card/dates';

function Dates() {
  const { boardId } = useParams();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');

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
    mutate({ dueDate: day.toDate(), cardId: cardId!.toString(), boardId: boardId.toString() });
  };

  return <DatesView isPending={isPending} isSuccess={isSuccess} onSave={handleSaveDueDate} />;
}

export default Dates;
