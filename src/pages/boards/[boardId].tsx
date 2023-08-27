import Board from '@/modules/Boards/components/Details';
import Head from 'next/head';

function BoardDetailsPage() {
  return (
    <>
      <Head>
        <title>Board Details</title>
      </Head>
      <Board />
    </>
  );
}

export default BoardDetailsPage;
