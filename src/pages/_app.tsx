import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from '@/components/Layout';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { StyledEngineProvider } from '@mui/material/styles';
import theme from '@/common/styles/theme';
import createEmotionCache from '@/common/styles/createEmotionCache';
import '@/common/styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <StyledEngineProvider injectFirst>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssVarsProvider theme={theme}>
          <CssBaseline />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </CssVarsProvider>
      </CacheProvider>
    </StyledEngineProvider>
  );
}
