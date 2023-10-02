import { useState, ChangeEvent } from 'react';
import ChecklistView from './view';
import { useCreateChecklistMutation } from '@/redux/services/card/checklist';
import withBoard from '@/hocs/withBoard';

type ChecklistProps = {
  boardId: string;
  cardId: string;
  onRefreshCard: () => void;
};

function Checklist({ boardId, cardId, onRefreshCard }: ChecklistProps) {
  const [checklistTitle, setChecklistTitle] = useState<string | undefined>();

  const [createChecklist, { isSuccess, isLoading }] = useCreateChecklistMutation();

  const handleAddChecklist = async (title: string) => {
    if (!title) return;
    await createChecklist({ checklistTitle: title, cardId: cardId, boardId: boardId });
    onRefreshCard();
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
