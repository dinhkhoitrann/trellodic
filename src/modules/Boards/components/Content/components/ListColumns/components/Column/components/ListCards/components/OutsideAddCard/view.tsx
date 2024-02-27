import AddCardIcon from '@mui/icons-material/AddCard';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import { Box, Button, Tooltip } from '@/components/UIElements';
import { useCustomTheme } from '@/common/styles/theme';

type OutsideAddCardViewProps = {
  onShowTextField: () => void;
};

function OutsideAddCardView({ onShowTextField }: OutsideAddCardViewProps) {
  const theme = useCustomTheme();

  return (
    <Box
      sx={{
        height: theme.customProps.columnFooterHeight,
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

export default OutsideAddCardView;
