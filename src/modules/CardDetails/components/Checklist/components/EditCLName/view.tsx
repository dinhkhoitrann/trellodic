import { useRef } from 'react';
import TextField from '@mui/material/TextField';

type EditCLNameViewProps = {
  currentName: string;
  onEdit: (_newName: string) => void;
  onClose: () => void;
};

function EditCLNameView({ currentName, onClose, onEdit }: EditCLNameViewProps) {
  const titleRef = useRef<HTMLInputElement>();

  const handleEdit = () => {
    if (titleRef.current && titleRef.current.value) {
      onEdit(titleRef.current.value);
    }
    onClose();
  };

  return (
    <TextField
      inputRef={titleRef}
      defaultValue={currentName}
      fullWidth
      autoFocus
      size="small"
      placeholder="Edit checklist name"
      onBlur={handleEdit}
    />
  );
}

export default EditCLNameView;
