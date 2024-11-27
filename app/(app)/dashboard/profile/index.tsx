import Column from '@/components/Column';
import CustomAppbar from '@/components/CustomAppbar';
import CustomInput from '@/components/CustomInput';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, View } from 'react-native';
import useProfile from './use-profile';
import CustomButton from '@/components/CustomButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from 'expo-constants';
import { Stack } from 'expo-router';
import CommonMenu from '@/components/CommonMenu';

function ProfilePage() {
  const {} = useProfile();

  return (
    <View className='h-screen w-screen bg-white'>
      <CustomAppbar options={{ headerTitle: 'My Profile' }} />
      <ScrollView
        contentContainerStyle={{
          // 53 is button height
          paddingBottom: Constants.statusBarHeight + 53 + 16,
          paddingTop: 16,
        }}
      >
        <Column className='gap-4 px-4'>
          <CustomInput label='Nama Lengkap' editable={false} value='Cahyo' />
          <CustomInput label='Email' editable={false} value='cahyo@gmail.com' />
          <CustomInput label='Telepon' editable={false} value='081281728' />
          <CustomInput label='User Name' editable={false} value='cahyo_' />
          <CustomInput label='NIS' editable={false} value='1291289' />
          <CustomInput label='NIDN' editable={false} value='10291092' />
          <CustomInput label='NIDN' editable={false} value='10291092' />
          <CustomInput label='NIDN' editable={false} value='10291092' />
          <CustomInput label='NIDN' editable={false} value='10291092' />
          <CustomButton label={'EDIT PROFILE'} className='mt-4 w-full bg-[#4CD964]' />
        </Column>
        <CommonMenu title='Edit Password' className='mt-4' />
        <CommonMenu title='Logout' textColor='#EB5757' />
      </ScrollView>
    </View>
  );
}

export default ProfilePage;
