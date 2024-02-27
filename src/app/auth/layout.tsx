'use client';
import { PropsWithChildren, useEffect } from 'react';
import { useColorScheme } from '@mui/material/styles';
import AuthForm from '@/modules/Auth';
import { usePathname } from 'next/navigation';
import { GoogleOAuthProvider } from '@react-oauth/google';

function AuthLayout({ children }: PropsWithChildren) {
  const { setMode } = useColorScheme();
  const pathname = usePathname();

  useEffect(() => {
    setMode('light');
  }, [setMode]);

  if (pathname.includes('verify')) return <>{children}</>;

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_ID || ''}>
      <AuthForm>{children}</AuthForm>
    </GoogleOAuthProvider>
  );
}

export default AuthLayout;
