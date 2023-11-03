import { Metadata } from 'next';
import BoardContent from '@/modules/Boards/components/Content';
import { fetchBoardDetails } from '@/services/board';

type Props = {
  params: { boardId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { boardId } = params;
  const board = await fetchBoardDetails({ boardId });

  return {
    title: `${board.title} | Trellodic`,
    description: 'See board details in your workspace',
  };
}

async function BoardDetailsPage({ params }: Props) {
  const { boardId } = params;
  const board = await fetchBoardDetails({ boardId });

  return <BoardContent board={board} boardId={boardId} />;
}

export default BoardDetailsPage;
