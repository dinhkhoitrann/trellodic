import { useUpdateChecklistNameMutation } from '@/redux/services/card/checklist';
import { withBoard, BoardGlobalProps } from '@/hocs';
import EditCLNameView from './view';

type EditCLNameProps = BoardGlobalProps & {
  checklistId: string;
  currentName: string;
  onClose: () => void;
};

function EditCLName({ checklistId, boardId, cardId, onRefreshCard, ...rest }: EditCLNameProps) {
  const [updateChecklistName] = useUpdateChecklistNameMutation();

  const handleEdit = (name: string) => {
    updateChecklistName({
      checklistId,
      cardId,
      name,
      onSuccess: onRefreshCard,
    });
  };

  return <EditCLNameView {...rest} onEdit={handleEdit} />;
}

export default withBoard(EditCLName);
