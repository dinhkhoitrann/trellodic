'use client';
import { Backdrop, CircularProgress } from '@/components/UIElements';

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
