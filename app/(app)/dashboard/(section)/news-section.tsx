import React from 'react';
import { Dimensions, View } from 'react-native';
import Constants from 'expo-constants';
import Carousel from 'react-native-reanimated-carousel';
import { NewsModel } from '@/model/news-model';
import NewsItem from '../(component)/news-item';

const NewsSection = ({ news }: { news: NewsModel[] }) => {
  const { width: screenWidth } = Dimensions.get('window');

  const renderItem = ({ item, index }: { item: NewsModel; index: number }) => {
    return <NewsItem data={item} />;
  };

  return (
    <View style={{ paddingTop: Constants.statusBarHeight }} className='w-full'>
      <Carousel
        width={screenWidth}
        height={165}
        data={news}
        mode='parallax'
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 27.5,
        }}
        loop={false}
        renderItem={renderItem}
        pagingEnabled
        snapEnabled
      />
    </View>
  );
};

export default NewsSection;
