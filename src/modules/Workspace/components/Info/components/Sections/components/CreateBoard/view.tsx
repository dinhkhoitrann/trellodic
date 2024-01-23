'use client';
import { MouseEvent, useState } from 'react';
import { Popover, Typography } from '@/components/UIElements';
import BoardItem from '../BoardItem';
import CreateForm from './components/Form';

function CreateBoardView() {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);
  const open = !!anchorEl;

  const handleOpen = (event: MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <BoardItem
        sx={{
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#282d33' : '#f1f2f4'),
          backgroundImage: 'unset',
        }}
        onClick={handleOpen}
      >
        <Typography sx={{ textAlign: 'center', lineHeight: '96px' }}>Create new board</Typography>
      </BoardItem>
      <Popover
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
