import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDrawer } from '@/hooks';
import List from './components/List';
import { getStyledIcon } from '@/components/_shared/Board/components/Chip';

function MenusView() {
  const { onOpen, render } = useDrawer(List);
  const StyledIcon = getStyledIcon(MoreHorizIcon);

  return (
    <>
      <IconButton onClick={onOpen}>
        <StyledIcon />
      </IconButton>
      {render()}
    </>
  );
}

export default MenusView;
