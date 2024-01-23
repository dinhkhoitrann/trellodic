import { toast } from 'react-toastify';
import { useUpdateSkillsMutation } from '@/redux/services/card/skills';
import { BoardGlobalProps, withBoard } from '@/hocs';
import SkillsView from './view';

function Skills({ cardId, onRefreshCard }: BoardGlobalProps) {
  const [updateSkillsInCard, { isLoading, isSuccess }] = useUpdateSkillsMutation();

  const handleUpdateSkills = (skills: string[]) => {
    updateSkillsInCard({
      cardId,
      skills,
      onSuccess: () => {
        onRefreshCard();
        toast.success('Updated skills successfully');
      },
    });
  };

  return <SkillsView isUpdating={isLoading} isSuccess={isSuccess} onUpdateSkills={handleUpdateSkills} />;
}

export default withBoard(Skills);
