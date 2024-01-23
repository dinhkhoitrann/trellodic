import FilterListIcon from '@mui/icons-material/FilterList';
import { StyledChip, getStyledIcon } from '@/components/_shared/Board/components/Chip';
import { useDrawer } from '@/hooks';
import Form from './components/Form';

function FilterView() {
  const { onOpen, render } = useDrawer(Form);
  const StyledFilterIcon = getStyledIcon(FilterListIcon);

  return (
    <>
      <StyledChip icon={<StyledFilterIcon />} label="Filter" clickable onClick={onOpen} />
      {render()}
    </>
  );
}

export default FilterView;
