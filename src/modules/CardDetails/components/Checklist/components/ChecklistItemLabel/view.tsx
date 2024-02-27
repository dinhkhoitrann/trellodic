import { useState, useRef } from 'react';
import { FormControlLabel, TextField } from '@/components/UIElements';
import { ChecklistItem } from '@/types/card.type';

type ChecklistItemLabelViewProps = {
  item: ChecklistItem;
  onEdit: (_newTitle: string) => void;
};

function ChecklistItemLabelView({ item, onEdit }: ChecklistItemLabelViewProps) {
  const [editItemMode, setEditItemMode] = useState(false);
  const titleRef = useRef<HTMLInputElement>();

  const handleShowHideEditCLItemForm = () => {
    setEditItemMode(!editItemMode);
  };

  const handleEdit = () => {
    if (titleRef.current && titleRef.current.value) {
      onEdit(titleRef.current.value);
    }
    handleShowHideEditCLItemForm();
  };

  return (
    <>
      {editItemMode ? (
        <TextField
          inputRef={titleRef}
          defaultValue={item.title}
          fullWidth
          autoFocus
          size="small"
          placeholder="Edit item title"
          sx={{ my: 1 }}
          onBlur={handleEdit}
        />
      ) : (
        <FormControlLabel
          control={<></>}
          label={item.title}
          sx={{ my: '4px', flex: 1, textDecoration: item.isDone ? 'line-through' : 'unset' }}
          onClick={handleShowHideEditCLItemForm}
        />
      )}
    </>
  );
}

export default ChecklistItemLabelView;
