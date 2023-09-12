import { useRef } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';

type AddCardSectionViewProps = {
  isPending: boolean;
  onHideTextField: () => void;
  onAddCard: (_cardTitle: string) => void;
};

function AddCardSectionView({ isPending, onHideTextField, onAddCard }: AddCardSectionViewProps) {
  const textFieldRef = useRef<HTMLInputElement>();

  const handleAddCard = () => {
    if (!textFieldRef.current || !textFieldRef.current?.value) {
      textFieldRef.current?.focus();
      return;
    }
    onAddCard(textFieldRef.current.value || '');
  };

  return (
    <Box sx={{ pb: 1 }}>
      <TextField
        fullWidth
        autoFocus
        placeholder="Enter a title for this card…"
        multiline
        minRows={4}
        maxRows={8}
        inputRef={textFieldRef}
      />
      <Stack direction="row" sx={{ mt: 1 }} spacing={1}>
        <Button variant="contained" disabled={isPending} onClick={handleAddCard}>
          {isPending ? 'Adding...' : 'Add card'}
        </Button>
        <Button onClick={onHideTextField}>
          <CloseIcon />
        </Button>
      </Stack>
    </Box>
  );
}

export default AddCardSectionView;
