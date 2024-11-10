import { Stack, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const DetailProduct = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ headerTitle: `Detail Product ${id}` }} />
      <Text>DetailProductPage - {id}</Text>
    </View>
  );
};

export default DetailProduct;
