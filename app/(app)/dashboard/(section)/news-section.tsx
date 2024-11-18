import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { NewsModel } from '@/model/news-model';
import { NewsItem } from '../(component)/news-item';
import Column from '@/components/Column';
import Row from '@/components/Row';
import { twMerge } from 'tailwind-merge';

const NewsSection = ({ news }: { news: NewsModel[] }) => {
  const { width: screenWidth } = Dimensions.get('window');

  const [activeIndex, setActiveIndex] = useState(0);

  const renderItem = ({ item, index }: { item: NewsModel; index: number }) => {
    return <NewsItem data={item} />;
  };

  return (
    <View className='mt-[1.5rem] flex h-[179px] w-full flex-col items-center'>
      <Carousel
        width={screenWidth}
        height={155}
        data={news}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 27.5,
        }}
        onProgressChange={(_, absolute) => {
          setActiveIndex(Math.round(absolute));
        }}
        loop={false}
        renderItem={renderItem}
        pagingEnabled
        snapEnabled
      />
      <Row className='mt-4 gap-2'>
        {
          // generate list
          [...Array(news.length)].map((_, index) => {
            return (
              <View
                key={index}
                className={twMerge(
                  'size-2 rounded-full',
                  index == activeIndex ? 'bg-white' : 'bg-[#FFFFFF80]'
                )}
              />
            );
          })
        }
      </Row>
    </View>
  );
};

export default NewsSection;
