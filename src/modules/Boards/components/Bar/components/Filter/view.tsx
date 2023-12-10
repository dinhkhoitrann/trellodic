import { useColorScheme } from '@mui/material';
import Chip from '@mui/material/Chip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDrawer } from '@/hooks';
import Form from './components/Form';
import { getChipStyles } from '../../service';

function FilterView() {
  const { onOpen, render } = useDrawer(Form);
  const { mode } = useColorScheme();
  const chipStyles = getChipStyles(mode);

  return (
    <>
      <Chip icon={<FilterListIcon />} label="Filter" clickable sx={chipStyles} onClick={onOpen} />
      {render()}
    </>
  );
}

export default FilterView;
