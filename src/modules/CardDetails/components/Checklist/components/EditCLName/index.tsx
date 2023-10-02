import EditCLNameView from './view';
import { useUpdateChecklistTitleMutation } from '@/redux/services/card/checklist';
import withBoard from '@/hocs/withBoard';

type EditCLNameProps = {
  checklistId: string;
  currentName: string;
  boardId: string;
  cardId: string;
  onClose: () => void;
  onRefreshCard: () => void;
};

function EditCLName({ checklistId, boardId, cardId, onRefreshCard, ...rest }: EditCLNameProps) {
  const [updateChecklistTitle] = useUpdateChecklistTitleMutation();

  const handleEdit = async (newName: string) => {
    await updateChecklistTitle({ checklistId, cardId: cardId, boardId: boardId, updatedTitle: newName });
    onRefreshCard();
  };

  return <EditCLNameView {...rest} onEdit={handleEdit} />;
}

export default withBoard(EditCLName);
