import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { deleteColumn } from '@/services/column';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { Column as ColumnType } from '@/types/column.type';
import ColumnView from './view';

type ColumnProps = BoardGlobalProps & {
  column: ColumnType;
};

function Column({ column, onRefreshBoard }: ColumnProps) {
  const [anchorEl, setAnchorEl] = useState<null | SVGSVGElement>(null);
  const { mutate: removeColumn } = useMutation({
    mutationFn: deleteColumn,
    onSuccess: () => {
      onRefreshBoard();
      toast.success('Deleted column successfully');
    },
  });

  const handleClick = (event: React.MouseEvent<SVGSVGElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDeleteColumn = ([columnId]: string[]) => {
    removeColumn({ columnId });
  };

  return (
    <ColumnView
      column={column}
      anchorEl={anchorEl}
      onClick={handleClick}
      onClose={handleClose}
      onDelete={handleDeleteColumn}
    />
  );
}

export default withBoard(Column);
