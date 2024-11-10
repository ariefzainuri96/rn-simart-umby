import { useAuth } from '@/context/auth';
import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';

const AppLayout = () => {
  const auth = useAuth();

  if (!auth?.session) {
    return <Redirect href='/(auth)/login' />;
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen name='product' options={{ headerShown: false }} />
      <Stack.Screen name='profile/index' options={{ headerTitle: 'Profile' }} />
    </Stack>
  );
};

export default AppLayout;
