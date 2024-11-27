import Row from '@/components/Row';
import React from 'react';
import { Text, Touchable, TouchableOpacity, View } from 'react-native';
import IcBell from '@/assets/icons/ic-bell.svg';
import CustomGradientView from '@/components/CustomBGGradientIcon';
import { Link } from 'expo-router';

const HeaderSection = () => {
  return (
    <Row className='mt-4 gap-2 px-4'>
      <Text className='sfPro600-14 flex-1 text-[1.5rem] text-white'>SIMART</Text>
      <View className='fl1ex size-[2.25rem] items-center justify-center rounded-full bg-[#FFFFFF26]'>
        <IcBell />
      </View>
      <Link href={'/(app)/dashboard/profile/'}>
        <CustomGradientView startColor={'#F66565'} endColor={'#E53C3C'}>
          <Text className='sfPro500-14 text-white'>S</Text>
        </CustomGradientView>
      </Link>
    </Row>
  );
};

export default HeaderSection;
