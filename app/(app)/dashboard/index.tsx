import { useDashboard } from '@/hooks/use-dashboard';
import { Stack } from 'expo-router';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import NewsSection from './(section)/news-section';
import { RequestState } from '@/model/common-enum';
import HeaderSection from './(section)/header-section';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NewsSkeleton } from './(component)/news-item';
import CustomStateView from '@/components/CustomStateView';

const DashboardPage = () => {
  const { newsState, news, getNews } = useDashboard();

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
      <SafeAreaView className='absolute inset-0 z-10 h-full w-full'>
        <ScrollView>
          <View className='flex flex-col items-start'>
            <HeaderSection />
            <CustomStateView
              state={newsState}
              Content={<NewsSection news={news} />}
              Loading={<NewsSkeleton />}
              onRetry={() => {
                getNews();
                console.log('retry');
              }}
              errorMarginTop={16}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default DashboardPage;
