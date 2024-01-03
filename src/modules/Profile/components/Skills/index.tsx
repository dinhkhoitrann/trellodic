'use client';
import { useAppSelector } from '@/redux/store';
import { selectUserProfile } from '@/redux/slices/user';
import { useAddSkillsMutation } from '@/redux/services/user/user';
import SkillsView from './view';

function Skills() {
  const user = useAppSelector(selectUserProfile);
  const [addSkillsToProfile, { isLoading }] = useAddSkillsMutation();

  const handleAddSkills = (skills: string[]) => {
    if (!user) return;
    addSkillsToProfile({ userId: user._id, skills });
  };

  return <SkillsView isAdding={isLoading} onAddSkills={handleAddSkills} />;
}

export default Skills;
