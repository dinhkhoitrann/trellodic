import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { addColumn } from '@/services/column';
import { BoardGlobalProps, withBoard } from '@/hocs';
import AddColumnSectionView from './view';

type AddColumnSectionProps = BoardGlobalProps & {
  onCancelAddingMode: () => void;
};

function AddColumnSection({ boardId, onCancelAddingMode, onRefreshBoard }: AddColumnSectionProps) {
  const { mutate, isPending } = useMutation({
    mutationFn: addColumn,
    onSuccess: () => {
      onCancelAddingMode();
      toast.success('Added column successfully');
      onRefreshBoard();
    },
    onError: () => {
      toast.error('Something went wrong, please try again');
    },
  });

  const handleAddColumn = (title: string) => {
    mutate({ title, boardId: boardId });
  };

  return (
    <AddColumnSectionView isPending={isPending} onHideTextField={onCancelAddingMode} onAddColumn={handleAddColumn} />
  );
}

export default withBoard(AddColumnSection);
