import type { Metadata } from 'next';
import Link from 'next/link';
import Typography from '@mui/material/Typography';

export const metadata: Metadata = {
  title: 'Home Page | Trellodic',
  description: 'Manage your work efficiently',
};

function HomePage() {
  return (
    <div>
      <Typography>Home Page</Typography>
      <Typography>
        <Link href="/boards/1">Go to Board 1</Link>
      </Typography>
    </div>
  );
}

export default HomePage;
