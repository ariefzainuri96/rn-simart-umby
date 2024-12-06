import { useDashboard } from '@/hooks/use-dashboard';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomStateView from '@/components/reusable-component/CustomStateView';
import Column from '@/components/reusable-component/Column';
import { LinearGradient } from 'expo-linear-gradient';
import IcScan from '@/assets/icons/ic-scan-qr.svg';
import CustomAppbar from '@/components/reusable-component/CustomAppbar';
import { router } from 'expo-router';
import NewsSkeleton from '@/components/page-component/dashboard/component/news-skeleton';
import HeaderSection from '@/components/page-component/dashboard/section/header-section';
import MenuSection from '@/components/page-component/dashboard/section/menu-section';
import NewsSection from '@/components/page-component/dashboard/section/news-section';

const DashboardPage = () => {
  const { newsState, news, menus, getNews } = useDashboard();

  return (
    <View className='relative flex-1'>
      <CustomAppbar
        options={{
          headerShown: false,
        }}
      />

      {/* background */}
      <View className='relative z-0 flex-1'>
        <Image
          source={require('@/assets/images/splash-background.png')}
          className='h-full w-full'
        />
      </View>

      {/* content */}
      <SafeAreaView className='absolute inset-0 z-10 flex-1'>
        <Column className='flex-1'>
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
          <Column className='mt-4 w-full flex-1 items-center rounded-tl-[32px] rounded-tr-[32px] bg-white p-4'>
            <MenuSection menus={menus} />

            <TouchableOpacity
              onPress={() => {
                router.push('/(app)/scanner');
              }}
            >
              <LinearGradient
                colors={['#1E3A8A', '#011754']}
                className='flex flex-row items-center gap-[10px] p-4'
                style={{ borderRadius: 1000 }}
              >
                <IcScan width={24} height={24} color={'#FFF'} />
                <Text className='sfPro600-14 text-white'>Scan QR Code</Text>
              </LinearGradient>
            </TouchableOpacity>
          </Column>
        </Column>
      </SafeAreaView>
    </View>
  );
};

export default DashboardPage;
