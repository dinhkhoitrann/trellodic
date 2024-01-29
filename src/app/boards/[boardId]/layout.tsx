'use client';
import { PropsWithChildren, useEffect } from 'react';
import BoardBar from '@/modules/Boards/components/Bar';
import { useAppDispatch } from '@/redux/store';
import { clear } from '@/redux/slices/board';

function BoardDetailsLayout({ children }: PropsWithChildren) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(clear());
    };
  }, [dispatch]);

  return (
    <>
      <BoardBar />
      {children}
    </>
  );
}

export default BoardDetailsLayout;
