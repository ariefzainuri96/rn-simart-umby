import { Stack } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const FilterPage = () => {
  return (
    <View>
      <Stack.Screen
        options={{
          headerTitle: 'Filter',
        }}
      />
      <Text>Filter Page</Text>
    </View>
  );
};

export default FilterPage;
