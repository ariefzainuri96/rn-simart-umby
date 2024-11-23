import Column from '@/components/Column';
import CommonMenu from '@/components/CommonMenu';
import CustomAppbar from '@/components/CustomAppbar';
import React from 'react';

const ManajemenInvetarisPage = () => {
  return (
    <Column className='h-screen bg-white'>
      <CustomAppbar headerTitle={'Manajemen Inventaris (2)'} />
      <CommonMenu title='Data Barang Aset' />
      <CommonMenu title='Data Barang Habis Pakai' />
    </Column>
  );
};

export default ManajemenInvetarisPage;
