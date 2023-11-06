import Profile from '@/modules/Profile';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile Page',
  description: 'View and manage your personal information',
};

function ProfilePage() {
  return <Profile />;
}

export default ProfilePage;
