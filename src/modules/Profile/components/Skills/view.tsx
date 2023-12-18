import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
      <Typography sx={{ mt: 4, fontSize: '1rem !important', fontWeight: '600' }}>Skills</Typography>
      <Card sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Add skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
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
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
}

export default SkillsView;
