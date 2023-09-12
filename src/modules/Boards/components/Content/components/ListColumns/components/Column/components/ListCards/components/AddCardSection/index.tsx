import { useParams } from 'next/navigation';
import AddCardSectionView from './view';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addCard } from '@/services/card';

type AddCardSectionProps = {
  columnId: string;
  onHideTextField: () => void;
};

function AddCardSection({ columnId, onHideTextField }: AddCardSectionProps) {
  const { boardId } = useParams();

  const handleAddCard = async (cardTitle: string) => {
    await addCard({ cardTitle, boardId: boardId as string, columnId });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: handleAddCard,
    onSuccess: () => {
      onHideTextField();
      toast.success('Added card successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return <AddCardSectionView isPending={isPending} onHideTextField={onHideTextField} onAddCard={mutate} />;
}

export default AddCardSection;
