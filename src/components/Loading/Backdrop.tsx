'use client';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

function BackdropLoading() {
  return (
    <Backdrop sx={{ color: (theme) => theme.palette.primary.light, zIndex: (theme) => theme.zIndex.drawer + 1 }} open>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default BackdropLoading;
