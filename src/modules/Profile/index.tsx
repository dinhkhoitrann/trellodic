import { Box, Container, Typography } from '@/components/UIElements';
import ProfilePhoto from './components/Photo';
import ProfileDetails from './components/Detail';
import Account from './components/Account';
import Skills from './components/Skills';

function Profile() {
  return (
    <Box sx={{ height: '100%', minHeight: '100vh', pt: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" fontWeight="600">
          Manage you profile
        </Typography>
        <Typography sx={{ my: 3 }}>Manage your personal information, and change avatar profile</Typography>
        <ProfilePhoto />
        <ProfileDetails />
        <Account />
        <Skills />
      </Container>
    </Box>
  );
}

export default Profile;
