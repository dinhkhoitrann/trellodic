import Chip from '@mui/material/Chip';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDrawer } from '@/hooks';
import Form from './components/Form';
import { CHIP_STYLES } from '../../constants';

function FilterView() {
  const { onOpen, render } = useDrawer(Form);
  return (
    <>
      <Chip icon={<FilterListIcon />} label="Filter" clickable sx={CHIP_STYLES} onClick={onOpen} />
      {render()}
    </>
  );
}

export default FilterView;
