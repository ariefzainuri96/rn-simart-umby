import { useDashboard } from '@/hooks/use-dashboard';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import NewsSection from './(section)/news-section';
import { RequestState } from '@/model/common-enum';

const DashboardPage = () => {
  const { newsState, news } = useDashboard();

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
      <View className='absolute inset-0 z-10 h-full w-full'>
        <ScrollView>
          <View className='flex flex-col items-start'>
            {newsState === RequestState.LOADING && <Text>Loading...</Text>}
            <NewsSection news={news} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default DashboardPage;
