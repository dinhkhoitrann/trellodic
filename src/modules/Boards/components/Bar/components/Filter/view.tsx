import Chip from '@mui/material/Chip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDrawer } from '@/hooks';
import Form from './components/Form';

function FilterView() {
  const { onOpen, render } = useDrawer(Form);

  return (
    <>
      <Chip icon={<FilterListIcon />} label="Filter" clickable onClick={onOpen} />
      {render()}
    </>
  );
}

export default FilterView;
