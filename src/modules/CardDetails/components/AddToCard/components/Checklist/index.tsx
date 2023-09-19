import { useState, ChangeEvent } from 'react';
import ChecklistView from './view';
import { useParams, useSearchParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { addChecklist } from '@/services/card';
import { toast } from 'react-toastify';

function Checklist() {
  const [checklistTitle, setChecklistTitle] = useState<string | undefined>();
  const { boardId } = useParams();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');

  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: addChecklist,
    onSuccess: () => {
      toast.success('Checklist added successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleAddChecklist = async (title: string) => {
    if (!title) return;
    mutate({ checklistTitle: title, cardId: cardId!.toString(), boardId: boardId.toString() });
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecklistTitle(event.target.value);
  };

  return (
    <ChecklistView
      title={checklistTitle}
      isPending={isPending}
      isSuccess={isSuccess}
      onAddChecklist={handleAddChecklist}
      onTitleChange={handleTitleChange}
    />
  );
}

export default Checklist;
