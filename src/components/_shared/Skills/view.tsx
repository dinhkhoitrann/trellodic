import { Autocomplete, Box, Button, CircularProgress, TextField } from '@/components/UIElements';

type SkillsViewProps = {
  options: string[];
  selectedSkills: string[];
  state: {
    isSearching: boolean;
    isUpdating: boolean;
  };
  onQueryChange: (_query: string) => void;
  onSelectSkills: (_skills: string[]) => void;
  onSaveSkills: () => void;
};

function SkillsView({ options, selectedSkills, state, onQueryChange, onSelectSkills, onSaveSkills }: SkillsViewProps) {
  const { isSearching, isUpdating } = state;
  return (
    <>
      <Autocomplete
        multiple
        value={selectedSkills}
        options={options}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        filterOptions={(x) => x}
        loading={isSearching}
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
                  {isSearching && <CircularProgress color="inherit" size={20} />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
      <Box sx={{ textAlign: 'end', mt: 2 }}>
        <Button variant="contained" loading={isUpdating} onClick={onSaveSkills}>
          Save
        </Button>
      </Box>
    </>
  );
}

export default SkillsView;
