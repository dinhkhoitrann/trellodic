import type { Metadata } from 'next';
import Workspace from '@/modules/Workspace';

export const metadata: Metadata = {
  title: 'Home Page | Tasky',
  description: 'Manage your work efficiently',
};

function HomePage() {
  return <Workspace />;
}

export default HomePage;
