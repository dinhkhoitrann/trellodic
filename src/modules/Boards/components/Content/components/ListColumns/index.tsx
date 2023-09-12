import { useState } from 'react';
import { Column } from '@/types/column.type';
import ListColumnsView from './view';

type ListColumnsProps = {
  columns: Column[];
};

function ListColumns({ columns }: ListColumnsProps) {
  const [isAddingMode, setIsAddingMode] = useState(false);

  const handleAddingMode = () => {
    setIsAddingMode(true);
  };

  const handleCancelAddingMode = () => {
    setIsAddingMode(false);
  };

  return (
    <ListColumnsView
      columns={columns}
      isAddingMode={isAddingMode}
      onAddingMode={handleAddingMode}
      onCancelAddingMode={handleCancelAddingMode}
    />
  );
}

export default ListColumns;
