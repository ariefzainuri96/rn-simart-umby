import CustomAppbar from '@/components/reusable-component/CustomAppbar';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function DataBarangAsetDetailPage() {
  const { id } = useLocalSearchParams();

  return (
    <View className='flex-1'>
      <CustomAppbar headerTitle={`${id}`} />
      <Text>DataBarangAsetDetailPage - {id}</Text>
    </View>
  );
}
