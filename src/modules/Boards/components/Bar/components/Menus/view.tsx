import IconButton from '@mui/material/IconButton';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDrawer } from '@/hooks';
import List from './components/List';

function MenusView() {
  const { onOpen, render } = useDrawer(List);

  return (
    <>
      <IconButton onClick={onOpen}>
        <MoreHorizIcon />
      </IconButton>
      {render()}
    </>
  );
}

export default MenusView;
