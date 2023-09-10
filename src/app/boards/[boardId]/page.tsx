import { Metadata } from 'next';
import Board from '@/modules/Boards/components/Details';

type Props = {
  params: { boardId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { boardId } = params;
  // TODO: fetch board from DB to be able to access board's title
  return {
    title: `Board Details ${boardId} | Trellodic`,
    description: 'See board details in your workspace',
  };
}

async function fetchData(boardId: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${boardId}`, {
    next: { revalidate: 10 },
  });
  return res.json();
}

async function BoardDetailsPage({ params }: Props) {
  const { boardId } = params;
  const data = await fetchData(boardId);
  console.log(data);
  return <Board />;
}

export default BoardDetailsPage;
