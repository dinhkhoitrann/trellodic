import { useParams } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCreateCardMutation } from '@/redux/services/card/card';
import AddCardSectionView from './view';

type AddCardSectionProps = {
  columnId: string;
  onHideTextField: () => void;
};

function AddCardSection({ columnId, onHideTextField }: AddCardSectionProps) {
  const { boardId } = useParams();
  const [addCard, { isLoading }] = useCreateCardMutation();

  const handleAddCard = async (title: string) => {
    addCard({
      title,
      boardId: boardId as string,
      columnId,
      onSuccess: () => {
        onHideTextField();
        toast.success('Created card successfully');
      },
    });
  };

  return <AddCardSectionView isPending={isLoading} onHideTextField={onHideTextField} onAddCard={handleAddCard} />;
}

export default AddCardSection;
