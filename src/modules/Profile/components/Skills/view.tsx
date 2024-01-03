import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddSkills from '@/components/Skills';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';

type SkillsViewProps = {
  isAdding: boolean;
  onAddSkills: (_skills: string[]) => void;
};

function SkillsView({ isAdding, onAddSkills }: SkillsViewProps) {
  const user = useAppSelector(selectUserProfile);
  const skills = user ? user.skills : [];

  return (
    <>
      <Typography sx={{ mt: 4, fontSize: '1rem !important', fontWeight: '600' }}>Skills</Typography>
      <Card sx={{ mt: 2 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Add skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AddSkills defaultSkills={skills} state={{ isAdding, isDeleting: false }} onSaveSkills={onAddSkills} />
          </AccordionDetails>
        </Accordion>
      </Card>
    </>
  );
}

export default SkillsView;
