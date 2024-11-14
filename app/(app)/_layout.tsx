import { Stack } from 'expo-router';
import React from 'react';

const AppLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='dashboard/index' />
      <Stack.Screen name='product' options={{ headerShown: false }} />
    </Stack>
  );
};

export default AppLayout;
