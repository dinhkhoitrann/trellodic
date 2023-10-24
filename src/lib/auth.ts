/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { DefaultSession, NextAuthOptions, getServerSession } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { getSession } from 'next-auth/react';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context';
import { redirect } from 'next/navigation';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    accessToken: string & DefaultSession['user'];
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
};

export const getAuthSession = () => {
  return getServerSession(authOptions);
};

export async function loginIsRequiredServer() {
  const session = await getAuthSession();
  if (!session) return redirect('/auth/login');
}

export async function loginIsRequiredClient(router: AppRouterInstance) {
  if (typeof window !== 'undefined') {
    const session = await getSession();
    if (!session) return router.push('/auth/login');
  }
}
