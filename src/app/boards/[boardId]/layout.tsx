'use client';
import { ReactNode } from 'react';
import { mockData } from '@/apis/mock-data';
import BoardBar from '@/modules/Boards/components/Bar';

type BoardDetailsLayoutProps = {
  children: ReactNode;
};

function BoardDetailsLayout({ children }: BoardDetailsLayoutProps) {
  return (
    <>
      <BoardBar board={mockData.board} />
      {children}
    </>
  );
}

export default BoardDetailsLayout;
