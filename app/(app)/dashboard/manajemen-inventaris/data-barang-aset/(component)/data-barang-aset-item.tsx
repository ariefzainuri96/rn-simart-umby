import CollapsibleView from '@/components/CollapsibleView';
import Column from '@/components/Column';
import CustomPopupMenu from '@/components/CustomPopupMenu';
import Row from '@/components/Row';
import { DataBarangAsetModel } from '@/model/data-barang-aset/data-barang-aset-model';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type DataBarangAsetItemProps = {
  data: DataBarangAsetModel;
  className?: string;
};

export default function DataBarangAsetItem({ data, className }: DataBarangAsetItemProps) {
  return (
    <Column className={twMerge('rounded-md bg-white p-4 shadow-md', className)}>
      <Row className='w-full'>
        <Text className='sfPro500-14 flex-1'>{data.namaBarang}</Text>
        <CustomPopupMenu
          triggerChild={<Ionicons name='ellipsis-vertical' size={16} color='#333333' />}
        />
      </Row>

      <Row className='mt-1 w-full'>
        <Text className='sfPro400-12 flex-1 text-gray3'>{data.noBarang}</Text>
        <Text className='sfPro400-12 flex-1 text-right text-gray3'>
          {data.jumlah} Unit . {data.ruang}
        </Text>
      </Row>

      <View className='mt-2 h-[1px] w-full bg-lineSeparator' />

      <CollapsibleView
        className='mt-2'
        header={(expanded) => <HeaderMenu title={'Deskripsi'} expanded={expanded} />}
      >
        <Text className='sfPro300-14 text-gray3'>{data.deskripsi}</Text>
      </CollapsibleView>

      <View className='mt-2 h-[1px] w-full bg-lineSeparator' />

      <CollapsibleView
        className='mt-2'
        header={(expanded) => <HeaderMenu title={'Spesifikasi'} expanded={expanded} />}
      >
        <Text className='sfPro300-14 text-gray3'>{data.spesifikasi}</Text>
      </CollapsibleView>
    </Column>
  );
}

const HeaderMenu = ({ title, expanded }: { title: string; expanded: boolean }) => {
  const rotateValue = useRef(new Animated.Value(0)).current; // Create animated value

  useEffect(() => {
    Animated.timing(rotateValue, {
      toValue: expanded ? 1 : 0, // 0 for original, 1 for 180deg
      duration: 300, // Duration of the animation
      useNativeDriver: true, // Optimize for native animations
    }).start(); // Start the animation
  }, [expanded]);

  // Interpolate rotateValue to generate rotation values
  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], // Rotate from 0 to 180 degrees
  });

  return (
    <Row className='w-full'>
      <Text className='sfPro400-14 flex-1'>{title}</Text>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Ionicons color={'#333333'} size={16} name='chevron-down' />
      </Animated.View>
    </Row>
  );
};
