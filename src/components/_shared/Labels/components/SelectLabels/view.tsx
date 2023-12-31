import { useSearchParams } from 'next/navigation';
import { useState, useEffect, ChangeEvent, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import { Label } from '@/types/board.type';
import { useAuthorized } from '@/hooks';
import { BoardGlobalProps, withBoard } from '@/hocs';
import MoreOptions from './components/MoreOptions';

type SelectLabelsViewProps = BoardGlobalProps & {
  onSelectedLabelsChange: (_event: ChangeEvent<HTMLInputElement>) => void;
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
  const labelsRef = useRef<Label[]>();
  const [search, setSearch] = useState('');
  const { isBoardAdmin } = useAuthorized();

  const searchParams = useSearchParams();
  const isInCard = !!searchParams.get('cardId');

  useEffect(() => {
    if (!search.trim()) {
      if (labelsRef.current) {
        setLabels(labelsRef.current);
      }
      return;
    }

    const filteredLabels = labels!.filter((label) => label.title.toLowerCase().includes(search.toLowerCase()));
    setLabels(filteredLabels);
  }, [board.labels, labels, search, setLabels]);

  useEffect(() => {
    const updatedLabels = board.labels!.map((label) => {
      if (card.labels?.find((item) => item._id === label._id)) {
        return { ...label, isSelected: true };
      }
      return { ...label };
    });

    labelsRef.current = [...updatedLabels];
    setLabels(updatedLabels);
  }, [board.labels, card.labels]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
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
