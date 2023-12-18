'use client';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { addSkills, searchSkills } from '@/services/user/skills';
import { useDebounce } from '@/hooks';
import SkillsView from './view';

function Skills() {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]); // TODO: handle the default skills of user
  const [query, setQuery] = useState('');

  const { mutate: searchOptions, isPending: isSearching } = useMutation({
    mutationFn: searchSkills,
    onSuccess: (data) => {
      setOptions(data);
    },
    onError: () => {
      setOptions([]);
    },
  });

  const { mutate: editSkills, isPending: isAdding } = useMutation({
    mutationFn: addSkills,
    onSuccess: () => {
      toast.success('Saved skills successfully');
    },
  });

  const debouncedQuery = useDebounce(query, 500);
  useEffect(() => {
    if (!debouncedQuery.trim()) return;
    searchOptions(debouncedQuery);
  }, [debouncedQuery, searchOptions]);

  const handleQueryChange = (enteredQuery: string) => {
    setQuery(enteredQuery);
  };

  const handleSelectSkills = (skills: string[]) => {
    setSelectedSkills(skills);
  };

  const handleSaveSkills = () => {
    editSkills({ skills: selectedSkills });
  };

  return (
    <SkillsView
      options={options}
      selectedSkills={selectedSkills}
      searching={isSearching}
      adding={isAdding}
      onQueryChange={handleQueryChange}
      onSelectSkills={handleSelectSkills}
      onSaveSkills={handleSaveSkills}
    />
  );
}

export default Skills;
