'use client';
import { ReactNode, useEffect } from 'react';
import BoardBar from '@/modules/Boards/components/Bar';
import { useLazyGetWorkspaceQuery } from '@/redux/services/workspace/workspace';
import { BoardGlobalProps, withBoard } from '@/hocs';

type BoardDetailsLayoutProps = BoardGlobalProps & {
  children: ReactNode;
};

function BoardDetailsLayout({ board, children }: BoardDetailsLayoutProps) {
  const [getWorkspace] = useLazyGetWorkspaceQuery();

  useEffect(() => {
    getWorkspace({ workspaceId: board.workspaceId });
  }, [board.workspaceId, getWorkspace]);

  return (
    <>
      <BoardBar />
      {children}
    </>
  );
}

export default withBoard(BoardDetailsLayout);
