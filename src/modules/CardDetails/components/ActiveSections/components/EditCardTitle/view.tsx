import { useRef } from 'react';
import { TextField } from '@/components/UIElements';

type EditCardTitleViewProps = {
  currentTitle: string;
  onEdit: (_title: string) => void;
  onClose: () => void;
};

function EditCardTitleView({ currentTitle, onEdit, onClose }: EditCardTitleViewProps) {
  const titleRef = useRef<HTMLInputElement>();

  const handleEdit = () => {
    if (titleRef.current && titleRef.current.value && titleRef.current.value.trim() !== currentTitle.trim()) {
      onEdit(titleRef.current.value);
    }
    onClose();
  };

  return (
    <TextField
      inputRef={titleRef}
      defaultValue={currentTitle}
      fullWidth
      autoFocus
      size="small"
      placeholder="Edit card title"
      onBlur={handleEdit}
    />
  );
}

export default EditCardTitleView;
