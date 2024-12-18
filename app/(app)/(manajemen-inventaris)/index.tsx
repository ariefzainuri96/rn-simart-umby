import Column from '@/components/Column';
import CommonMenu from '@/components/CommonMenu';
import CustomAppbar from '@/components/CustomAppbar';
import { useRouter } from 'expo-router';
import React from 'react';

const ManajemenInvetarisPage = () => {
  const router = useRouter();

  return (
    <Column className='h-screen bg-white'>
      <CustomAppbar headerTitle={'Manajemen Inventaris'} />
      <CommonMenu
        onPress={() => {
          router.push('/(app)/(manajemen-inventaris)/data-barang-aset');
        }}
        title='Data Barang Aset'
      />
      <CommonMenu title='Data Barang Habis Pakai' />
    </Column>
  );
};

export default ManajemenInvetarisPage;
