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
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import { Label } from '@/types/board.type';
import { useAppSelector } from '@/redux/store';
import { selectCardDetails } from '@/redux/slices/card';
import { selectBoardDetails } from '@/redux/slices/board';
import { useAuthorized } from '@/hooks';

type SelectLabelsViewProps = {
  onSelectedLabelsChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  onEditMode: (_label: Label) => void;
};

const makeStyle = (label: Label) => ({
  flex: 1,
  backgroundColor: label.color,
  p: '12px',
  borderRadius: '4px',
});

function SelectLabelsView({ onSelectedLabelsChange, onEditMode }: SelectLabelsViewProps) {
  const board = useAppSelector(selectBoardDetails);
  const card = useAppSelector(selectCardDetails);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board.labels, search, setLabels]);

  useEffect(() => {
    const updatedLabels = board.labels!.map((label) => {
      if (card.labels?.findIndex((item) => item._id === label._id) !== -1) {
        return { ...label, isSelected: true };
      }
      return { ...label };
    });

    labelsRef.current = [...updatedLabels];
    setLabels(updatedLabels);
  }, [board.labels, card]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const renderLabel = (label: Label) => {
    if (isInCard) {
      return (
        <FormControlLabel
          control={<Checkbox name={label._id} defaultChecked={label.isSelected} onChange={onSelectedLabelsChange} />}
          label={label.title}
          sx={{
            my: '4px',
            flex: 1,
            '.MuiFormControlLabel-label': makeStyle(label),
          }}
        />
      );
    }

    return (
      <Box
        sx={{
          my: '4px',
          mr: 1,
          ...makeStyle(label),
        }}
      >
        {label.title}
      </Box>
    );
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
      <FormControl sx={{ my: 3, mx: 2 }} fullWidth component="fieldset" variant="standard">
        <FormLabel component="legend">Labels</FormLabel>
        <FormGroup>
          {labels!.length === 0 ? (
            <Typography sx={{ textAlign: 'center', mt: 2 }}>No labels found</Typography>
          ) : (
            labels!.map((label) => (
              <Stack key={label._id} direction="row" sx={{ alignItems: 'center' }}>
                {renderLabel(label)}
                {isBoardAdmin && (
                  <IconButton sx={{ mr: 2 }} onClick={() => onEditMode(label)}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                )}
              </Stack>
            ))
          )}
        </FormGroup>
      </FormControl>
    </>
  );
}

export default SelectLabelsView;
