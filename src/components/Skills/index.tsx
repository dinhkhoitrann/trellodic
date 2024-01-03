'use client';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { searchSkills } from '@/services/skills';
import { useDebounce } from '@/hooks';
import SkillsView from './view';

type SkillsProps = {
  state: {
    isAdding: boolean;
    isDeleting: boolean;
  };
  onSaveSkills: (_skills: string[]) => void;
  onSuccess?: () => void;
};

function Skills({ state, onSaveSkills }: SkillsProps) {
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
    onSaveSkills(selectedSkills);
  };

  return (
    <SkillsView
      options={options}
      selectedSkills={selectedSkills}
      state={{ ...state, isSearching }}
      onQueryChange={handleQueryChange}
      onSelectSkills={handleSelectSkills}
      onSaveSkills={handleSaveSkills}
    />
  );
}

export default Skills;
