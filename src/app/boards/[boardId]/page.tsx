import { Metadata } from 'next';
import { cookies } from 'next/headers';
import BoardContent from '@/modules/Boards/components/Content';
import { fetchBoardDetails } from '@/services/board';

type Props = {
  params: { boardId: string };
};

async function fetchBoard(boardId: string) {
  const token = cookies().get('token')?.value;
  const board = await fetchBoardDetails({ boardId, token });
  return board;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { boardId } = params;
  const board = await fetchBoard(boardId);

  return {
    title: `${board?.name} | Tasky`,
    description: 'See board details in your workspace',
  };
}

async function BoardDetailsPage({ params }: Props) {
  const { boardId } = params;
  const board = await fetchBoard(boardId);

  return <BoardContent board={board} boardId={boardId} />;
}

export default BoardDetailsPage;
