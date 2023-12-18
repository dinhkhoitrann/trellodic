import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddSkills from '@/components/Skills';
import { addSkillsToProfile } from '@/services/skills';

function SkillsView() {
  return (
    <>
      <Typography sx={{ mt: 4, fontSize: '1rem !important', fontWeight: '600' }}>Skills</Typography>
      <Card sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Add skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddSkills onSaveSkills={addSkillsToProfile} />
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
}

export default SkillsView;
