import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

type SkillsViewProps = {
  options: string[];
  selectedSkills: string[];
  searching: boolean;
  adding: boolean;
  onQueryChange: (_query: string) => void;
  onSelectSkills: (_skills: string[]) => void;
  onSaveSkills: () => void;
};

function SkillsView({
  options,
  selectedSkills,
  searching,
  adding,
  onQueryChange,
  onSelectSkills,
  onSaveSkills,
}: SkillsViewProps) {
  return (
    <>
      <Autocomplete
        multiple
        value={selectedSkills}
        options={options}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        filterOptions={(x) => x}
        loading={searching}
        onChange={(e, value) => onSelectSkills(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Select skills"
            placeholder="Skills"
            onChange={(e) => onQueryChange(e.target.value)}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {searching && <CircularProgress color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      <Box sx={{ textAlign: 'end', mt: 2 }}>
        <Button variant="contained" disabled={adding} onClick={onSaveSkills}>
          Save
        </Button>
      </Box>
    </>
  );
}

export default SkillsView;
