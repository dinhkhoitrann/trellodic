import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { isEmpty } from 'lodash';
import {
  TextField,
  Typography,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Box,
  Checkbox,
  Stack,
} from '@/components/UIElements';
import { Label } from '@/types/board.type';
import { useAuthorized, useDebounce } from '@/hooks';
import { BoardGlobalProps, withBoard } from '@/hocs';
import MoreOptions from './components/MoreOptions';

type SelectLabelsViewProps = BoardGlobalProps & {
  onSelectedLabelsChange: (_event: React.ChangeEvent<HTMLInputElement>) => void;
  onEditMode: (_label: Label) => void;
};

const makeStyle = (label: Label) => ({
  flex: 1,
  backgroundColor: label.color,
  p: '12px',
  borderRadius: '4px',
});

function SelectLabelsView({ board, card, onSelectedLabelsChange, onEditMode }: SelectLabelsViewProps) {
  const [labels, setLabels] = useState<Label[]>([]);
  const [search, setSearch] = useState('');
  const { isBoardAdmin } = useAuthorized();

  const searchParams = useSearchParams();
  const isInCard = !!searchParams.get('cardId');

  const debouncedSearch = useDebounce(search);
  useEffect(() => {
    const boardLabels = board.labels || [];
    if (isEmpty(boardLabels)) return;

    if (!debouncedSearch.trim()) {
      setLabels(boardLabels);
      return;
    }

    const filteredLabels = boardLabels.filter((label) =>
      label.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
    setLabels(filteredLabels);
  }, [board.labels, debouncedSearch]);

  useEffect(() => {
    if (!board.labels) {
      setLabels([]);
      return;
    }

    const updatedLabels = board.labels!.map((label) => {
      if (card.labels?.find((item) => item._id === label._id)) {
        return { ...label, isSelected: true };
      }
      return { ...label };
    });
    setLabels(updatedLabels);
  }, [board.labels, card.labels]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const renderLabel = (label: Label) => {
    if (isInCard) {
      return (
        <FormControlLabel
          control={<Checkbox name={label._id} checked={!!label.isSelected} onChange={onSelectedLabelsChange} />}
          label={label.title}
          sx={{ my: '4px', flex: 1, '.MuiFormControlLabel-label': makeStyle(label) }}
        />
      );
    }

    return <Box sx={{ my: '4px', mr: 1, ...makeStyle(label) }}>{label.title}</Box>;
  };

  return (
    <>
      <TextField
        fullWidth
        value={search}
        onChange={handleSearchChange}
        size="small"
        placeholder="Search label"
        sx={{ marginTop: '20px' }}
      />
      <FormControl sx={{ my: 3 }} fullWidth component="fieldset" variant="standard">
        <FormLabel component="legend" sx={{ mb: 2 }}>
          Labels
        </FormLabel>
        <FormGroup>
          {labels!.length === 0 ? (
            <Typography sx={{ textAlign: 'center', mt: 2 }}>No labels found</Typography>
          ) : (
            labels!.map((label) => (
              <Stack key={label._id} direction="row" sx={{ alignItems: 'center' }}>
                {renderLabel(label)}
                {isBoardAdmin && <MoreOptions label={label} onEditMode={() => onEditMode(label)} />}
              </Stack>
            ))
          )}
        </FormGroup>
      </FormControl>
    </>
  );
}

export default withBoard(SelectLabelsView);
