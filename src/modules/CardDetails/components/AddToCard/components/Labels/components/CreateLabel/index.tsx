import { useState } from 'react';
import { useParams } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import CreateLabelView from './view';
import { createLabel } from '@/services/board';

type CreateLabelProps = {
  onCreateSuccess: () => void;
};

function CreateLabel({ onCreateSuccess }: CreateLabelProps) {
  const [selectedColor, setSelectedColor] = useState('');
  const { boardId } = useParams();
  const { mutate, isPending } = useMutation({
    mutationFn: createLabel,
    onSuccess: () => {
      onCreateSuccess();
      toast.success('Label created successfully');
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const handleCreateLabel = async (title: string, color: string) => {
    mutate({ title, color, boardId: boardId.toString() });
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <CreateLabelView
      selectedColor={selectedColor}
      isPending={isPending}
      onSelectColorChange={handleSelectColor}
      onCreate={handleCreateLabel}
    />
  );
}

export default CreateLabel;
