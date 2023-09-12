import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import AddColumnSectionView from './view';
import { addColumn } from '@/services/column';
import { useParams } from 'next/navigation';

type AddColumnSectionProps = {
  onCancelAddingMode: () => void;
};

function AddColumnSection({ onCancelAddingMode }: AddColumnSectionProps) {
  const { boardId } = useParams();

  const { mutate, isPending } = useMutation({
    mutationFn: addColumn,
    onSuccess: () => {
      onCancelAddingMode();
      toast.success('Added column successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleAddColumn = (columnTitle: string) => {
    mutate({ columnTitle, boardId: boardId as string });
  };

  return (
    <AddColumnSectionView isPending={isPending} onHideTextField={onCancelAddingMode} onAddColumn={handleAddColumn} />
  );
}

export default AddColumnSection;
