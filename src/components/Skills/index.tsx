'use client';
import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { searchSkills } from '@/services/skills';
import { useDebounce } from '@/hooks';
import SkillsView from './view';

type SkillsProps = {
  defaultSkills: string[];
  state: {
    isUpdating: boolean;
    isSuccess: boolean;
  };
  onSaveSkills: (_skills: string[]) => void;
  onSuccess?: () => void;
};

function Skills({ defaultSkills, state, onSaveSkills }: SkillsProps) {
  const [options, setOptions] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
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

  useEffect(() => {
    setSelectedSkills(defaultSkills);
  }, [defaultSkills]);

  useEffect(() => {
    if (state.isSuccess) {
      toast.success('Updated skills successfully');
    }
  }, [state.isSuccess]);

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
