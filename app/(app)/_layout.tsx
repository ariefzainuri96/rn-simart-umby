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
      <Stack.Screen
        name='product/index'
        options={{
          headerTitle: 'Product',
        }}
      />
      <Stack.Screen
        name='product/[id]/index'
        options={{
          headerTitle: 'Product Detail',
          headerTitleAlign: 'center',
          headerRight: () => {
            return <Text>Test</Text>;
          },
        }}
      />
    </Stack>
  );
};

export default AppLayout;
