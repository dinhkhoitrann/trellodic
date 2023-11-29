import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { updateColumn } from '@/services/column';
import { withBoard, BoardGlobalProps } from '@/hocs';
import ColumnTitleView from './view';

type ColumnTitleProps = BoardGlobalProps & {
  columnId: string;
  title: string;
};

function ColumnTitle({ columnId, title, onRefreshBoard }: ColumnTitleProps) {
  const { mutate: updateTitle } = useMutation({
    mutationFn: updateColumn,
    onSuccess: () => {
      onRefreshBoard();
      toast.success('Edited title successfully');
    },
  });

  const handleEdit = (title: string) => {
    updateTitle({ columnId, title });
  };

  return <ColumnTitleView title={title} onEdit={handleEdit} />;
}

export default withBoard(ColumnTitle);
