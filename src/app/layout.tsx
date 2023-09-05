'use client';
import { useState, useEffect } from 'react';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Experimental_CssVarsProvider as CssVarsProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { CacheProvider } from '@emotion/react';
import AppBar from '@/components/AppBar';
import theme from '@/common/styles/theme';
import createEmotionCache from '@/common/styles/createEmotionCache';
import '@/common/styles/globals.css';
import BackdropLoading from '@/components/Loading/Backdrop';

const clientSideEmotionCache = createEmotionCache();
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Trellodic',
  description: 'A project with love',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <html lang="en" className={roboto.className}>
      <StyledEngineProvider injectFirst>
        <CacheProvider value={clientSideEmotionCache}>
          <CssVarsProvider theme={theme}>
            <CssBaseline />
            <body>
              {!isLoaded ? (
                <BackdropLoading />
              ) : (
                <Container disableGutters maxWidth={false} sx={{ height: '100vh' }}>
                  <AppBar />
                  {!isLoaded ? <BackdropLoading /> : children}
                </Container>
              )}
            </body>
          </CssVarsProvider>
        </CacheProvider>
      </StyledEngineProvider>
    </html>
  );
}
