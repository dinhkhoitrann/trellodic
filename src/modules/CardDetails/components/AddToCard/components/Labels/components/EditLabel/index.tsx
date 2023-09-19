import { useState } from 'react';
import { useParams } from 'next/navigation';
import { Label } from '@/types/board.type';
import EditLabelView from './view';
import { useMutation } from '@tanstack/react-query';
import { editLabel } from '@/services/board';
import { toast } from 'react-toastify';

type EditLabelProps = {
  label?: Label;
  onEditSuccess: () => void;
};

function EditLabel({ label, onEditSuccess }: EditLabelProps) {
  const [selectedColor, setSelectedColor] = useState(label?.color || '');
  const { boardId } = useParams();
  const { mutate, isPending } = useMutation({
    mutationFn: editLabel,
    onSuccess: () => {
      toast.success('Label edited successfully');
      onEditSuccess();
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  const handleEdit = (title: string, color: string) => {
    console.log({ title, color, boardId: boardId.toString() });
    mutate({ title, color, boardId: boardId.toString() });
  };

  return (
    <EditLabelView
      label={label}
      isPending={isPending}
      selectedColor={selectedColor}
      onSelectColorChange={handleSelectColor}
      onEdit={handleEdit}
    />
  );
}

export default EditLabel;
