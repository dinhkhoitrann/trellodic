'use client';
import { ReactNode, useEffect } from 'react';
import { useColorScheme } from '@mui/material/styles';
import AuthForm from '@/modules/Auth';
import { usePathname } from 'next/navigation';

function AuthLayout({ children }: { children: ReactNode }) {
  const { setMode } = useColorScheme();
  const pathname = usePathname();

  useEffect(() => {
    setMode('light');
  }, [setMode]);

  if (pathname.includes('verify')) return <>{children}</>;

  return <AuthForm>{children}</AuthForm>;
}

export default AuthLayout;
