import { useEditCardMutation } from '@/redux/services/card/card';
import EditCardTitleView from './view';

type EditCardTitleProps = {
  cardId: string;
  currentTitle: string;
  onClose: () => void;
};

function EditCardTitle({ cardId, ...rest }: EditCardTitleProps) {
  const [editTitle] = useEditCardMutation();

  const handleEdit = (title: string) => {
    editTitle({ cardId, title });
  };

  return <EditCardTitleView {...rest} onEdit={handleEdit} />;
}

export default EditCardTitle;
