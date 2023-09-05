import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Home Page | Trellodic',
  description: 'Manage your work efficiently',
};

function HomePage() {
  return (
    <div>
      <p>Home Page</p>
      <Link href="/boards/1">Go to Board 1</Link>
    </div>
  );
}

export default HomePage;
