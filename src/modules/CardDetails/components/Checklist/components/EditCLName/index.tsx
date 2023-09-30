import { useParams, useSearchParams } from 'next/navigation';
import EditCLNameView from './view';
import { useUpdateChecklistTitleMutation } from '@/redux/services/card';

type EditCLNameProps = {
  checklistId: string;
  currentName: string;
  onClose: () => void;
};

function EditCLName({ checklistId, ...rest }: EditCLNameProps) {
  const { boardId } = useParams();
  const searchParams = useSearchParams();
  const cardId = searchParams.get('cardId');
  const [trigger] = useUpdateChecklistTitleMutation();

  const handleEdit = (newName: string) => {
    trigger({ checklistId, cardId: cardId!, boardId: boardId.toString(), updatedTitle: newName });
  };

  return <EditCLNameView {...rest} onEdit={handleEdit} />;
}

export default EditCLName;
