import type { Metadata } from 'next';
import Board from '@/modules/Boards/components/Details';

export const metadata: Metadata = {
  title: 'Board Details | Trellodic',
  description: 'See board details in your workspace',
};

function Page() {
  return <Board />;
}

export default Page;
