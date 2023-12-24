import { useState, ChangeEvent } from 'react';
import ChecklistView from './view';
import { useCreateChecklistMutation } from '@/redux/services/card/checklist';
import { withBoard, BoardGlobalProps } from '@/hocs';

function Checklist({ cardId, onRefreshCard }: BoardGlobalProps) {
  const [checklistTitle, setChecklistTitle] = useState<string>('');

  const [createChecklist, { isSuccess, isLoading }] = useCreateChecklistMutation();

  const handleAddChecklist = (name: string) => {
    createChecklist({
      name,
      cardId,
      onSuccess: () => {
        setChecklistTitle('');
        onRefreshCard();
      },
    });
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

export default withBoard(Checklist);
