import { Metadata } from 'next';
import BoardContent from '@/modules/Boards/components/Content';
import { FE_API_ROOT, TAGS_CACHE } from '@/utils/constants';

type Props = {
  params: { boardId: string };
};

async function getBoard(boardId: string) {
  const res = await fetch(`${FE_API_ROOT}/api/boards/${boardId}`, {
    next: { revalidate: 10, tags: [`${TAGS_CACHE.BOARDS}/${boardId}`] },
  });
  const { board } = await res.json();

  return board;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { boardId } = params;
  const board = await getBoard(boardId);

  return {
    title: `${board.title} | Trellodic`,
    description: 'See board details in your workspace',
  };
}

async function BoardDetailsPage({ params }: Props) {
  const { boardId } = params;
  const board = await getBoard(boardId);

  return <BoardContent board={board} />;
}

export default BoardDetailsPage;
