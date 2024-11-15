import { delay } from '@/helper/utils';
import { RequestState } from '@/model/common-enum';
import { NewsModel } from '@/model/news-model';
import { useEffect, useState } from 'react';

export function useDashboard() {
  const [newsState, setNewsState] = useState(RequestState.IDLE);
  const [news, setNews] = useState<NewsModel[]>([]);

  async function getNews() {
    if (newsState === RequestState.LOADING) return;

    setNewsState(RequestState.LOADING);

    await delay(1000);

    setNews([
      {
        title: 'Test Pengumuman 1',
        date: '2023-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      },
      {
        title: 'Test Pengumuman 2',
        date: '2023-01-01',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      },
      {
        title: 'Test Pengumuman 3',
        date: '2023-01-01',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.',
      },
    ]);

    setNewsState(RequestState.SUCCESS);
  }

  useEffect(() => {
    getNews();
  }, []);

  return {
    newsState,
    news,
    getNews,
  };
}
