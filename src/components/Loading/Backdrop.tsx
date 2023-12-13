'use client';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

type BackdropLoadingProps = {
  open: boolean;
};

function BackdropLoading({ open }: BackdropLoadingProps) {
  return (
    <Backdrop
      sx={{ color: (theme) => theme.palette.primary.light, zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default BackdropLoading;
