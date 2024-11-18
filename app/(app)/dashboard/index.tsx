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
import Column from '@/components/Column';
import MenuSection from './(section)/menu-section';

const DashboardPage = () => {
  const { newsState, news, menus, getNews } = useDashboard();

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
        <Column className='h-full'>
          <HeaderSection />
          <CustomStateView
            state={newsState}
            Content={<NewsSection news={news} />}
            Loading={<NewsSkeleton />}
            onRetry={() => {
              getNews();
            }}
            errorMarginTop={16}
          />
          <View className='mt-4 flex w-full flex-1 items-center rounded-tl-[32px] rounded-tr-[32px] bg-white p-4'>
            <MenuSection menus={menus} />
          </View>
        </Column>
      </SafeAreaView>
    </View>
  );
};

export default DashboardPage;
