import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@/components/UIElements';
import { getStyledIcon } from '@/components/_shared/Board/components/Chip';
import { useDrawer } from '@/hooks';
import List from './components/List';

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
