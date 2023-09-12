import { useRef } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { useTheme } from '@mui/styles';
import { CustomThemeOptions } from '@/common/styles/theme';

type AddCardSectionViewProps = {
  isAddingMode: boolean;
  isPending: boolean;
  onShowTextField: () => void;
  onHideTextField: () => void;
  onAddCard: (_cardTitle: string) => void;
};

function AddCardSectionView({
  isAddingMode,
  isPending,
  onShowTextField,
  onHideTextField,
  onAddCard,
}: AddCardSectionViewProps) {
  const textFieldRef = useRef<HTMLInputElement>();
  const theme = useTheme<CustomThemeOptions>();

  const handleAddCard = () => {
    if (!textFieldRef.current || !textFieldRef.current?.value) {
      textFieldRef.current?.focus();
      return;
    }
    onAddCard(textFieldRef.current.value || '');
  };

  if (!isAddingMode) {
    return (
      <Box
        sx={{
          height: theme.customProps.columnFooterHeight,
          p: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Button startIcon={<AddCardIcon />} onClick={onShowTextField}>
          Add new card
        </Button>
        <Tooltip title="Drag to move">
          <DragHandleIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
      </Box>
    );
  }

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
