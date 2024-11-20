import { Stack } from 'expo-router';
import React from 'react';

export const DashboardLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='manajemen-aset' />
      <Stack.Screen name='manajemen-barang-pakai-habis' />
      <Stack.Screen name='manajemen-inventaris' />
      <Stack.Screen name='task-approval' />
    </Stack>
  );
};
