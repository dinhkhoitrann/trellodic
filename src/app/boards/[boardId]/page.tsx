import { Metadata } from 'next';
import Board from '@/modules/Boards/components/Details';
import { API_ROOT, TAGS_CACHE } from '@/utils/constants';

type Props = {
  params: { boardId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getBoard(boardId: string) {
  const res = await fetch(`${API_ROOT}/api/boards/${boardId}`, {
    next: { revalidate: 10, tags: [`${TAGS_CACHE.BOARDS}/${boardId}`] },
  });
  const {
    data: { board },
  } = await res.json();

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

  return <Board board={board} />;
}

export default BoardDetailsPage;
