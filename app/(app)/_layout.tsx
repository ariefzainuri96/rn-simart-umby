import { Stack } from 'expo-router';

export default function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen name='index' />
      <Stack.Screen name='manajemen-aset' />
      <Stack.Screen name='manajemen-barang-pakai-habis' />
      <Stack.Screen name='(manajemen-inventaris)' options={{ headerShown: false }} />
      <Stack.Screen name='task-approval' />
      <Stack.Screen name='profile' />
      <Stack.Screen name='scanner' />
    </Stack>
  );
}
