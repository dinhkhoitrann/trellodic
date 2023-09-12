import { useState } from 'react';
import { useParams } from 'next/navigation';
import AddCardSectionView from './view';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { addCard } from '@/services/card';

type AddCardSectionProps = {
  columnId: string;
};

function AddCardSection({ columnId }: AddCardSectionProps) {
  const { boardId } = useParams();
  const [isAdding, setIsAdding] = useState(false);

  const handleShowTextField = () => {
    setIsAdding(true);
  };

  const handleHideTextField = () => {
    setIsAdding(false);
  };

  const handleAddCard = async (cardTitle: string) => {
    await addCard(cardTitle, boardId as string, columnId);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: handleAddCard,
    onSuccess: () => {
      setIsAdding(false);
      toast.success('Added card successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return (
    <AddCardSectionView
      isAddingMode={isAdding}
      isPending={isPending}
      onShowTextField={handleShowTextField}
      onHideTextField={handleHideTextField}
      onAddCard={mutate}
    />
  );
}

export default AddCardSection;
