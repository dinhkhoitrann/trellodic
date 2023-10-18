'use client';
import { MouseEvent, useState } from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { Theme } from '@/common/enums';
import BoardItem from '../BoardItem';
import CreateForm from './components/Form';

function CreateBoardView() {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleOpen = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <BoardItem
        sx={{ bgcolor: (theme) => (theme.palette.mode === Theme.Dark ? '#282d33' : '#f1f2f4') }}
        onClick={handleOpen}
      >
        <Typography sx={{ textAlign: 'center', lineHeight: '96px' }}>Create new board</Typography>
      </BoardItem>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'left',
        }}
      >
        <CreateForm onClose={handleClose} />
      </Popover>
    </>
  );
}

export default CreateBoardView;
