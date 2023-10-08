import { useState } from 'react';
import { Label } from '@/types/board.type';
import EditLabelView from './view';
import { toast } from 'react-toastify';
import { useEditLabelMutation } from '@/redux/services/board/label';
import { withBoard, BoardGlobalProps } from '@/hocs';

type EditLabelProps = BoardGlobalProps & {
  label?: Label;
  onEditSuccess: () => void;
};

function EditLabel({ label, boardId, onRefreshBoard, onRefreshCard, onEditSuccess }: EditLabelProps) {
  const [selectedColor, setSelectedColor] = useState(label?.color || '');
  const [editLabel, { isLoading }] = useEditLabelMutation();

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleEdit = (title: string, color: string) => {
    editLabel({
      title,
      color,
      boardId,
      onSuccess: () => {
        toast.success('Label edited successfully');
        onEditSuccess();
        onRefreshBoard();
        onRefreshCard();
      },
      onFailed: (errorMsg) => {
        toast.error(errorMsg);
      },
    });
  };

  return (
    <EditLabelView
      label={label}
      isPending={isLoading}
      selectedColor={selectedColor}
      onSelectColorChange={handleSelectColor}
      onEdit={handleEdit}
    />
  );
}

export default withBoard(EditLabel);
