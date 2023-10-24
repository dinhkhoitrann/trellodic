'use client';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import { Provider } from 'react-redux';
import { SessionProvider } from 'next-auth/react';
import { Experimental_CssVarsProvider as CssVarsProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { CacheProvider } from '@emotion/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import AppBar from '@/components/AppBar';
import BackdropLoading from '@/components/Loading/Backdrop';
import theme from '@/common/styles/theme';
import createEmotionCache from '@/common/styles/createEmotionCache';
import store from '@/redux/store';
import 'react-toastify/dist/ReactToastify.css';
import '@/common/styles/globals.css';
import { loginIsRequiredClient } from '@/lib/auth';

const clientSideEmotionCache = createEmotionCache();
const roboto = Lexend({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
const queryClient = new QueryClient();

export const metadata: Metadata = {
  title: 'Trellodic',
  description: 'A project with love',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsLoaded(true);
    const protectRoute = async () => {
      await loginIsRequiredClient(router);
    };

    protectRoute();
  }, [router]);

  return (
    <html lang="en" className={roboto.className}>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          <CacheProvider value={clientSideEmotionCache}>
            <CssVarsProvider theme={theme}>
              <CssBaseline />
              <SessionProvider>
                <QueryClientProvider client={queryClient}>
                  <body>
                    {!isLoaded ? (
                      <BackdropLoading />
                    ) : (
                      <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
                        {pathname.startsWith('/auth') ? <></> : <AppBar />}
                        {!isLoaded ? <BackdropLoading /> : children}
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
                </QueryClientProvider>
              </SessionProvider>
            </CssVarsProvider>
          </CacheProvider>
        </StyledEngineProvider>
      </Provider>
    </html>
  );
}
