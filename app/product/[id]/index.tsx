import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const DetailProductPage = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>DetailProductPage - {id}</Text>
    </View>
  );
};

export default DetailProductPage;
