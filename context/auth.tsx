import { useStorageState } from '@/hooks/use-storage-state';
import { useRouter, useSegments } from 'expo-router';
import { createContext, useContext, useEffect, useState, type PropsWithChildren } from 'react';

type TAuthContext = {
  session: string | null;
  signIn: () => void;
  signOut: () => void;
};

const AuthContext = createContext<TAuthContext | null>(null);

export function useAuth() {
  const value = useContext(AuthContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useAuth must be wrapped in a <AuthProvider />');
    }
  }

  // Return the value from the context
  return value;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const segments = useSegments();
  const router = useRouter();

  const [[_, session], setSession] = useStorageState('session');

  useEffect(() => {
    if (session === null) return;

    console.log('session => ', session);
    console.log('segments => ', segments[0]);

    if (!session && segments[0] !== '(auth)') {
      router.replace('/(auth)/login');
    } else if (session && segments[0] !== '(app)') {
      router.replace('/(app)/(tabs)/');
    }
  }, [session, segments]);

  return (
    <AuthContext.Provider
      value={{
        session: session,
        signIn: () => {
          setSession('xxx');
        },
        signOut: () => {
          setSession(null);

          router.replace('/(auth)/login');
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
