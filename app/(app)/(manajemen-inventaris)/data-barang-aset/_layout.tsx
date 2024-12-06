import { Stack } from 'expo-router';
import React from 'react';

export default function DataBarangAsetLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='[id]' />
    </Stack>
  );
}
