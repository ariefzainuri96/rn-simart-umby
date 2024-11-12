import { useAuth } from '@/context/auth';
import { Link } from 'expo-router';
import React from 'react';
import { Button, Image, Pressable, ScrollView, Text, View } from 'react-native';
import Constants from 'expo-constants';

const LoginPage = () => {
  const auth = useAuth();

  return (
    <ScrollView className='h- screen w-screen bg-white'>
      <View
        style={{ paddingTop: Constants.statusBarHeight }}
        className='flex flex-col items-center'
      >
        <Image
          source={require('@/assets/images/umby-logo.png')}
          style={{ width: 148, height: 144 }}
        />
        <Text className='font-SfPro600 text-primary mt-[1.5rem] p-0 text-[1.5rem]'>SIMART</Text>
        <Text className='font-SfPro400 text-textPrimary text-[.875rem]'>
          Sistem Informasi Aset Rumah Tangga
        </Text>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
