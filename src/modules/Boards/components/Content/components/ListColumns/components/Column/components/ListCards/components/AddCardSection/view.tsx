import { useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Stack, TextField } from '@/components/UIElements';

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
        <Button variant="contained" loading={isPending} onClick={handleAddCard}>
          Add card
        </Button>
        <Button onClick={onHideTextField}>
          <CloseIcon />
        </Button>
      </Stack>
    </Box>
  );
}

export default AddCardSectionView;
