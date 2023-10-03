import { useState } from 'react';
import CreateLabelView from './view';
import withBoard from '@/hocs/withBoard';
import { useAddLabelMutation } from '@/redux/services/board/label';
import { toast } from 'react-toastify';

type CreateLabelProps = {
  boardId: string;
  onRefreshBoard: () => void;
  onRefreshCard: () => void;
  onCreateSuccess: () => void;
};

function CreateLabel({ boardId, onRefreshBoard, onRefreshCard, onCreateSuccess }: CreateLabelProps) {
  const [selectedColor, setSelectedColor] = useState('');
  const [createLabel, { isLoading }] = useAddLabelMutation();

  const handleCreateLabel = async (title: string, color: string) => {
    createLabel({
      title,
      color,
      boardId,
      onSuccess: () => {
        toast.success('Create label successfully');
        onCreateSuccess();
        onRefreshBoard();
        onRefreshCard();
      },
      onFailed: (errorMsg) => {
        toast.error(errorMsg);
      },
    });
  };

  const handleSelectColor = (color: string) => {
    setSelectedColor(color);
  };

  return (
    <CreateLabelView
      selectedColor={selectedColor}
      isPending={isLoading}
      onSelectColorChange={handleSelectColor}
      onCreate={handleCreateLabel}
    />
  );
}

export default withBoard(CreateLabel);
