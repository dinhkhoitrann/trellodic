import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import { Experimental_CssVarsProvider as CssVarsProvider, StyledEngineProvider } from '@mui/material/styles';
import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import store from '@/redux/store';
import theme from '@/common/styles/theme';
import createEmotionCache from '@/common/styles/createEmotionCache';
import { buildProviderTree } from './service';

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

function ProviderTree({ children }: PropsWithChildren) {
  const ProviderTree = buildProviderTree([
    [Provider, { store }],
    [StyledEngineProvider, { injectFirst: true }],
    [CacheProvider, { value: clientSideEmotionCache }],
    [CssVarsProvider, { theme }],
    [CssBaseline],
    [QueryClientProvider, { client: queryClient }],
  ]);

  return <ProviderTree>{children}</ProviderTree>;
}

export default ProviderTree;
