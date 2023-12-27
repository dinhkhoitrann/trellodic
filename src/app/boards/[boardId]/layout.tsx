'use client';
import { ReactNode, useEffect } from 'react';
import { mockData } from '@/apis/mock-data';
import BoardBar from '@/modules/Boards/components/Bar';
import { useLazyGetWorkspaceQuery } from '@/redux/services/workspace/workspace';

type BoardDetailsLayoutProps = {
  children: ReactNode;
};

function BoardDetailsLayout({ children }: BoardDetailsLayoutProps) {
  const [getWorkspace] = useLazyGetWorkspaceQuery();

  useEffect(() => {
    getWorkspace({ workspaceId: mockData.board.workspaceId });
  }, [getWorkspace]);

  return (
    <>
      <BoardBar board={mockData.board} />
      {children}
    </>
  );
}

export default BoardDetailsLayout;
