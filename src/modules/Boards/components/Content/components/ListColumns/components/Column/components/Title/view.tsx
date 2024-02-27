import { useRef, useState } from 'react';
import { Box, TextField, Typography } from '@/components/UIElements';

type ColumnTitleViewProps = {
  title: string;
  onEdit: (_title: string) => void;
};

function ColumnTitleView({ title, onEdit }: ColumnTitleViewProps) {
  const [editMode, setEditMode] = useState(false);
  const titleRef = useRef<HTMLInputElement>();

  const handleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  const handleEdit = () => {
    if (titleRef.current && titleRef.current.value && titleRef.current.value.trim() !== title.trim()) {
      onEdit(titleRef.current.value);
    }
    handleEditMode();
  };

  return (
    <Box sx={{ px: 1 }}>
      {editMode ? (
        <TextField
          inputRef={titleRef}
          defaultValue={title}
          fullWidth
          autoFocus
          size="small"
          placeholder="Edit card title"
          onBlur={handleEdit}
        />
      ) : (
        <Typography
          variant="h6"
          sx={{ fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={handleEditMode}
        >
          {title}
        </Typography>
      )}
    </Box>
  );
}

export default ColumnTitleView;
