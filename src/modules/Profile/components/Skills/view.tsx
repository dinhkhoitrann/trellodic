import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, Card, Typography } from '@/components/UIElements';
import UpdateSkills from '@/components/_shared/Skills';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';

type SkillsViewProps = {
  isUpdating: boolean;
  isSuccess: boolean;
  onUpdateSkills: (_skills: string[]) => void;
};

function SkillsView({ isUpdating, isSuccess, onUpdateSkills }: SkillsViewProps) {
  const user = useAppSelector(selectUserProfile);
  const skills = user?.skills || [];

  return (
    <>
      <Typography sx={{ mt: 4, fontSize: '1rem !important', fontWeight: '600' }}>Skills</Typography>
      <Card sx={{ mt: 2 }}>
        <Accordion>
          <Accordion.Summary expandIcon={<ExpandMoreIcon />}>
            <Typography>Add skills</Typography>
          </Accordion.Summary>
          <Accordion.Details>
            <UpdateSkills defaultSkills={skills} state={{ isUpdating, isSuccess }} onSaveSkills={onUpdateSkills} />
          </Accordion.Details>
        </Accordion>
      </Card>
    </>
  );
}

export default SkillsView;
