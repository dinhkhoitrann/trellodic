'use client';
import { ReactNode, useEffect } from 'react';
import { useColorScheme } from '@mui/material/styles';
import AuthForm from '@/modules/Auth';

function AuthLayout({ children }: { children: ReactNode }) {
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode('light');
  }, [setMode]);

  return <AuthForm>{children}</AuthForm>;
}

export default AuthLayout;
