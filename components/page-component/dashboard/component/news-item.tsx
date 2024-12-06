import Column from '@/components/reusable-component/Column';
import { getRandomNumber } from '@/helper/utils';
import { NewsModel } from '@/model/news-model';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { twMerge } from 'tailwind-merge';

export default function NewsItem({ data }: { data: NewsModel }) {
  const { width: screenWidth } = Dimensions.get('window');

  const totalWord = 100;

  const description = () => {
    return data.description.length > totalWord
      ? data.description.slice(0, totalWord) + '...'
      : data.description;
  };

  return (
    <Column
      style={{
        marginHorizontal: screenWidth * 0.05,
        width: screenWidth * 0.9,
        height: 155,
      }}
      className='rounded-md bg-[#213168] p-4'
    >
      <Text className='sfPro600-14 text-white'>{data.title}</Text>
      <Text className='sfPro400-12 mt-1 text-white'>{data.date}</Text>
      <Text className='sfPro300-14 mt-2 leading-normal text-white'>
        {description()}{' '}
        {data.description.length > totalWord && (
          <Text
            className='sfPro300-14 text-[#2b6ccc] underline'
            onPress={() => console.log('Baca Selengkapnya')}
          >
            Baca Selengkapnya
          </Text>
        )}
      </Text>
    </Column>
  );
}
