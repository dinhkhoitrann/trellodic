import { useEditCardMutation } from '@/redux/services/card/card';
import EditCardTitleView from './view';

type EditCardTitleProps = {
  cardId: string;
  boardId: string;
  currentTitle: string;
  onClose: () => void;
};

function EditCardTitle({ cardId, boardId, ...rest }: EditCardTitleProps) {
  const [editTitle] = useEditCardMutation();

  const handleEdit = (title: string) => {
    editTitle({ cardId, title, boardId });
  };

  return <EditCardTitleView {...rest} onEdit={handleEdit} />;
}

export default EditCardTitle;
