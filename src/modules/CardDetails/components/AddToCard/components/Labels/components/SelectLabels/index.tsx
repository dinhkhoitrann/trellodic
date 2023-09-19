import { useState, useEffect, ChangeEvent } from 'react';
import SelectLabelsView from './view';
import { Label } from '@/types/board.type';

const labels: Label[] = [
  { _id: '1', title: 'Title 1', color: '#164b35', isSelected: true },
  { _id: '2', title: 'Title 2', color: '#2ecc71', isSelected: true },
  { _id: '3', title: 'Title 3', color: '#3498db', isSelected: false },
];

type SelectLabelsProps = {
  onEditMode: (_label: Label) => void;
};

function SelectLabels({ onEditMode }: SelectLabelsProps) {
  const [search, setSearch] = useState('');
  const [checkedLabels, setCheckedLabels] = useState(labels);

  useEffect(() => {
    const filteredLabels = labels.filter((label) => label.title.toLowerCase().includes(search.toLowerCase()));
    setCheckedLabels(filteredLabels);
  }, [search]);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSelectedLabelsChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedLabels = [...checkedLabels];
    const checkedLabelIndex = updatedLabels.findIndex((label) => label.title === event.target.name);
    updatedLabels[checkedLabelIndex].isSelected = !updatedLabels[checkedLabelIndex].isSelected;
    setCheckedLabels(updatedLabels);
  };

  return (
    <SelectLabelsView
      search={search}
      labels={checkedLabels}
      onSearchChange={handleSearchChange}
      onSelectedLabelsChange={handleSelectedLabelsChange}
      onEditMode={onEditMode}
    />
  );
}

export default SelectLabels;
