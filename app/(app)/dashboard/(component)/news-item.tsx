import { NewsModel } from '@/model/news-model';
import React from 'react';
import { Dimensions, Pressable, Text, View } from 'react-native';

const NewsItem = ({ data }: { data: NewsModel }) => {
  const { width: screenWidth } = Dimensions.get('window');

  const description = () => {
    return data.description.length > 100
      ? data.description.slice(0, 100) + '...'
      : data.description;
  };

  return (
    <View
      style={{
        marginHorizontal: screenWidth * 0.05,
        width: screenWidth * 0.9,
        height: 165,
      }}
      className='flex flex-col items-start rounded-md bg-[#213168] p-4'
    >
      <Text className='sfPro600-14 text-white'>{data.title}</Text>
      <Text className='sfPro400-12 mt-1 text-white'>{data.date}</Text>
      <Text className='sfPro300-14 mt-2 text-white'>
        {description()}
        {data.description.length > 100 && (
          <Pressable onPress={() => console.log('Baca Selengkapnya')}>
            <Text className='sfPro300-14 text-primary underline'>Baca Selengkapnya</Text>
          </Pressable>
        )}
      </Text>
    </View>
  );
};

export default NewsItem;
