import { useState, ChangeEvent } from 'react';
import ChecklistView from './view';
import { useParams, useSearchParams } from 'next/navigation';
import { useCreateChecklistMutation } from '@/redux/services/card';

function Checklist() {
  const [checklistTitle, setChecklistTitle] = useState<string | undefined>();
  const { boardId } = useParams();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');

  const [trigger, { isSuccess, isLoading }] = useCreateChecklistMutation();

  const handleAddChecklist = async (title: string) => {
    if (!title) return;
    trigger({ checklistTitle: title, cardId: cardId!.toString(), boardId: boardId.toString() });
  };

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChecklistTitle(event.target.value);
  };

  return (
    <ChecklistView
      title={checklistTitle}
      isPending={isLoading}
      isSuccess={isSuccess}
      onAddChecklist={handleAddChecklist}
      onTitleChange={handleTitleChange}
    />
  );
}

export default Checklist;
