import { Stack } from 'expo-router';
import React from 'react';

const ProductLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerTitle: 'Product List' }} />
      <Stack.Screen name='[id]' />
      <Stack.Screen name='filter' />
    </Stack>
  );
};

export default ProductLayout;
