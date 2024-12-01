import { Stack } from 'expo-router';
import React from 'react';

export default function ManajemenInventarisLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='data-barang-aset/index' />
    </Stack>
  );
}
