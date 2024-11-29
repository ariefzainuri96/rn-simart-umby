import { Stack } from 'expo-router';
import React from 'react';

export default function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='manajemen-aset/index' />
      <Stack.Screen name='manajemen-barang-pakai-habis/index' />
      <Stack.Screen name='manajemen-inventaris/index' />
      <Stack.Screen name='task-approval/index' />
      <Stack.Screen name='profile/index' />
      <Stack.Screen name='scanner/index' />
    </Stack>
  );
}
