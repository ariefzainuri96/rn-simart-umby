import { useStorageState } from '@/hooks/use-storage-state';
import { useRouter, useSegments } from 'expo-router';
import { createContext, useContext, useEffect, type PropsWithChildren } from 'react';
import { View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

type TAuthContext = {
  session: string | null;
  signIn: (nis: string) => void;
  signOut: () => void;
};

const AuthContext = createContext<TAuthContext | null>(null);

export function useAuth() {
  const value = useContext(AuthContext);

  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useAuth must be used inside an <AuthProvider />');
    }
  }

  return value;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const segments = useSegments();
  const router = useRouter();

  const [[loading, session], setSession] = useStorageState('session');

  useEffect(() => {
    if (loading) return;

    // hide splash screen after storage is loaded
    SplashScreen.hideAsync();

    console.log(`currentSegments ${segments[0]}`);

    if (!session && segments[0] !== '(auth)') {
      router.replace('/(auth)/login');
    } else if (session && segments[0] !== '(app)') {
      router.replace('/(app)/dashboard');
    }
  }, [loading, session, segments]);

  // if (loading) {
  //   return <View className='h-screen w-screen bg-white'></View>;
  // }

  return (
    <AuthContext.Provider
      value={{
        session: session,
        signIn: (value: string) => {
          setSession(value);
        },
        signOut: () => {
          setSession(null);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
