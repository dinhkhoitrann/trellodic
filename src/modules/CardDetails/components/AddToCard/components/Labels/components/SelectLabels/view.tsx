import { ChangeEvent } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Label } from '@/types/board.type';

type SelectLabelsViewProps = {
  labels: Label[];
  search: string;
  onSearchChange: (_event: ChangeEvent<HTMLInputElement>) => void;
  onSelectedLabelsChange: (_event: ChangeEvent<HTMLInputElement>) => void;
};

function SelectLabelsView({ labels, search, onSearchChange, onSelectedLabelsChange }: SelectLabelsViewProps) {
  return (
    <>
      <TextField
        fullWidth
        value={search}
        onChange={onSearchChange}
        size="small"
        placeholder="Search label"
        sx={{ marginTop: '20px' }}
      />
      <FormControl sx={{ my: 3, mx: 2 }} fullWidth component="fieldset" variant="standard">
        <FormLabel component="legend">Labels</FormLabel>
        <FormGroup>
          {labels.length === 0 ? (
            <Typography sx={{ textAlign: 'center', mt: 2 }}>No labels found</Typography>
          ) : (
            labels.map((label) => (
              <FormControlLabel
                key={label._id}
                control={<Checkbox name={label.title} checked={label.isSelected} onChange={onSelectedLabelsChange} />}
                label={label.title}
                sx={{
                  my: '4px',
                  '.MuiFormControlLabel-label': {
                    flex: 1,
                    backgroundColor: label.color,
                    p: '12px',
                    borderRadius: '4px',
                  },
                }}
              />
            ))
          )}
        </FormGroup>
      </FormControl>
    </>
  );
}

export default SelectLabelsView;
