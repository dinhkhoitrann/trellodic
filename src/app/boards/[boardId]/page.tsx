import { Metadata } from 'next';
import BoardContent from '@/modules/Boards/components/Content';

type Props = {
  params: { boardId: string };
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Board Details | Tasky`,
    description: 'See board details in your workspace',
  };
}

async function BoardDetailsPage({ params }: Props) {
  const { boardId } = params;
  return <BoardContent boardId={boardId} />;
}

export default BoardDetailsPage;
