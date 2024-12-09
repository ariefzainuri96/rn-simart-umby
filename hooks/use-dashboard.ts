import { delay } from '@/helper/utils';
import { MenuModel } from '@/model/menu-model';
import { NewsModel } from '@/model/news-model';
import { useEffect, useState } from 'react';
import IcManajemenInventaris from '@/assets/icons/ic-manajemen-inventaris.svg';
import IcManajemenBarangPakaiHabis from '@/assets/icons/manajemen-barang-habis-pakai.svg';
import IcManajemenAset from '@/assets/icons/manajemen-aset.svg';
import IcTaskApproval from '@/assets/icons/ic-task-approval.svg';
import { RequestState } from '@/helper/enums';

export function useDashboard() {
  const [newsState, setNewsState] = useState(RequestState.IDLE);
  const [news, setNews] = useState<NewsModel[]>([]);
  const menus: MenuModel[] = [
    {
      title: 'Manajemen Inventaris',
      icon: IcManajemenInventaris,
      bgColor: '#438AF7',
    },
    {
      title: 'Manajamen Barang Pakai Habis',
      icon: IcManajemenBarangPakaiHabis,
      bgColor: '#5856D6',
    },
    {
      title: 'Manajemen Aset',
      icon: IcManajemenAset,
      bgColor: '#06B6D4',
    },
    {
      title: 'Task Approval',
      icon: IcTaskApproval,
      bgColor: '#1FA836',
    },
  ];

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
    menus,
  };
}
