import { useRef, useEffect, ChangeEvent } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import PopoverWrapper from '../Popover';

type ChecklistViewProps = {
  title?: string;
  isPending: boolean;
  isSuccess: boolean;
  onAddChecklist: (_title: string) => Promise<void>;
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

  const handleAddChecklist = async () => {
    await onAddChecklist(title!);
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<ChecklistIcon />}
      popoverContent={
        <PopoverWrapper title="Add checklist" onClose={handleClose}>
          <TextField
            value={title}
            error={title === ''}
            helperText={title === '' && '* Please enter checklist title'}
            fullWidth
            size="small"
            placeholder="Title"
            sx={{ marginTop: '20px' }}
            onChange={onTitleChange}
          />
          <Button variant="contained" disabled={isPending} sx={{ mt: 2 }} onClick={handleAddChecklist}>
            {isPending ? 'Adding...' : 'Add'}
          </Button>
        </PopoverWrapper>
      }
    >
      Checklist
    </ActionButton>
  );
}

export default ChecklistView;
