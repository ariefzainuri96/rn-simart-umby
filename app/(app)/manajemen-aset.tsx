import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const ManajemenAsetPage = () => {
  return (
    <View>
      <Stack.Screen options={{ headerTitle: 'Manajemen Aset' }} />
      <Text>ManajemenAsetPage</Text>
    </View>
  );
};

export default ManajemenAsetPage;
