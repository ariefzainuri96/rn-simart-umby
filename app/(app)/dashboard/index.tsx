import { Stack } from 'expo-router';
import React from 'react';
import { Image, Text, View } from 'react-native';

const DashboardPage = () => {
  return (
    <View className='relative h-screen w-screen'>
      <Stack.Screen options={{ headerShown: false }} />

      {/* background */}
      <View className='relative z-0 h-full w-full'>
        <Image
          source={require('@/assets/images/splash-background.png')}
          className='h-full w-full'
        />
      </View>

      {/* content */}
      <Text>Dashboard</Text>
    </View>
  );
};

export default DashboardPage;
