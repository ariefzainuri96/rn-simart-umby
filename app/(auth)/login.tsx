import { useAuth } from '@/context/auth';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, Image, Pressable, ScrollView, Text, View } from 'react-native';
import Constants from 'expo-constants';
import CustomInput from '@/components/CustomInput';
import CustomButton from '@/components/CustomButton';
import AntDesign from '@expo/vector-icons/AntDesign';
import CustomCheckbox from '@/components/CustomCheckbox';

const LoginPage = () => {
  const [check, setChecked] = useState(false);
  const auth = useAuth();

  return (
    <ScrollView className='h- screen w-screen bg-white'>
      <View
        style={{ paddingTop: Constants.statusBarHeight }}
        className='flex flex-col items-center px-[1.5rem] pb-[1.5rem]'
      >
        <Image
          source={require('@/assets/images/umby-logo.png')}
          style={{ width: 148, height: 144 }}
        />
        <Text className='mt-[1.5rem] font-SfPro600 text-[1.5rem] text-primary'>SIMART</Text>
        <Text className='font-SfPro400 text-[.875rem] text-textPrimary'>
          Sistem Informasi Aset Rumah Tangga
        </Text>
        <CustomInput
          className='mt-[3rem]'
          label='NIS'
          onChange={(e) => {
            console.log(e.nativeEvent.text);
          }}
        />
        <CustomInput
          className='mt-[1.5rem]'
          label='Password'
          onChange={(e) => {
            console.log(e.nativeEvent.text);
          }}
          secureTextEntry={true}
        />
        <CustomButton
          onPress={() => {
            console.log('test');
          }}
          className='mt-[2rem] w-full bg-primary'
          label={'Login Local'}
        />
        <CustomButton
          onPress={() => {
            console.log('test2');
          }}
          className='mt-[1rem] w-full border-[1px] border-primary bg-transparent'
          textColor='text-primary'
          label={'Login SSO'}
        />
        <View className='mt-4 flex w-full flex-row items-center gap-4'>
          <CustomCheckbox
            handleOnPress={() => setChecked((value) => !value)}
            value={check}
            onValueChange={setChecked}
            label='Ingatkan Saya'
          />
          <View className='flex flex-1 flex-row justify-end'>
            <CustomButton
              label={'Lupa Password?'}
              className='bg-transparent'
              textColor='text-blue4'
            />
          </View>
        </View>
        <View className='mt-[1rem] w-full rounded-[4px] border-l-[4px] border-l-[#FF5D5D] bg-[#F665651A] px-[1.25rem] py-[.75rem]'>
          <Text className='font-SfPro400 text-[0.625rem] text-textPrimary'>
            Untuk alasan keamanan, silahkan logout dan tutup browser Anda setelah selesai
            menggunakan layanan yang memerlukan otentikasi!{' '}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginPage;
