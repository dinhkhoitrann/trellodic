'use client';
import { useState, useEffect, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
import { Lexend } from 'next/font/google';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { ToastContainer } from 'react-toastify';
import AppBar from '@/components/AppBar';
import BackdropLoading from '@/components/Loading/Backdrop';
import GlobalInfo from '@/components/GlobalInfo';
import ProviderTree from '@/components/Provider';
import { withAuth } from '@/hocs';
import 'react-toastify/dist/ReactToastify.css';
import '@/common/styles/globals.css';

const roboto = Lexend({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

function RootLayout({ children }: PropsWithChildren) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <html lang="en" className={roboto.className}>
      <ProviderTree>
        <body>
          {!isLoaded ? (
            <BackdropLoading open />
          ) : (
            <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
              {pathname.startsWith('/auth') ? <></> : <AppBar />}
              <Box sx={{ bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#24272b' : 'white') }}>
                <GlobalInfo>{children}</GlobalInfo>
              </Box>
            </Container>
          )}
          <ToastContainer
            position="top-right"
            autoClose={3000}
            closeOnClick
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </body>
      </ProviderTree>
    </html>
  );
}

export default withAuth(RootLayout);
