import { useRef, useEffect, ChangeEvent } from 'react';
import ChecklistIcon from '@mui/icons-material/Checklist';
import { TextField, Button } from '@/components/UIElements';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import PopoverWrapper from '../Popover';

type ChecklistViewProps = {
  title: string | undefined;
  isPending: boolean;
  isSuccess: boolean;
  onAddChecklist: (_title: string) => void;
  onTitleChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

function ChecklistView({ title, isPending, isSuccess, onAddChecklist, onTitleChange }: ChecklistViewProps) {
  const ref = useRef<ActionButtonRef>(null);

  useEffect(() => {
    if (isPending) return;
    if (isSuccess) handleClose();
  }, [isPending, isSuccess]);

  const handleClose = () => {
    ref.current?.handleClose();
  };

  const handleAddChecklist = () => {
    if (!title) return;
    onAddChecklist(title);
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<ChecklistIcon />}
      renderPopover={() => (
        <PopoverWrapper title="Add checklist" onClose={handleClose}>
          <TextField
            value={title}
            fullWidth
            size="small"
            placeholder="Title"
            sx={{ marginTop: '20px' }}
            onChange={onTitleChange}
          />
          <Button variant="contained" disabled={!title} loading={isPending} sx={{ mt: 2 }} onClick={handleAddChecklist}>
            Add
          </Button>
        </PopoverWrapper>
      )}
    >
      Checklist
    </ActionButton>
  );
}

export default ChecklistView;
