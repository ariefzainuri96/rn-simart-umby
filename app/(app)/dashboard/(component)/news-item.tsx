import Column from '@/components/Column';
import { getRandomNumber } from '@/helper/utils';
import { NewsModel } from '@/model/news-model';
import React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { twMerge } from 'tailwind-merge';

export const NewsItem = ({ data }: { data: NewsModel }) => {
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
};

export const NewsSkeleton = () => {
  const { width: screenWidth } = Dimensions.get('window');

  return (
    <View
      style={{
        marginHorizontal: screenWidth * 0.05,
        width: screenWidth * 0.9,
        height: 155,
      }}
      className='mt-[1.5rem] flex flex-col items-start rounded-md bg-[#213168] p-4'
    >
      <View className='flex w-full animate-pulse flex-col items-start'>
        <View className='h-3 w-[127px] rounded bg-slate-200' />
        <View className='mt-2 h-3 w-[91px] rounded bg-slate-200' />
        {Array.from({ length: getRandomNumber(3, 5) }).map((_, index) => (
          <View
            key={index}
            style={{
              width: getRandomNumber(200, screenWidth * 0.75),
            }}
            className={twMerge('h-3 rounded bg-slate-200', index === 0 ? 'mt-3' : 'mt-2')}
          />
        ))}
      </View>
    </View>
  );
};
