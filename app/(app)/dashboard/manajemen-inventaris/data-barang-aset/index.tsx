import CustomAppbar from '@/components/CustomAppbar';
import React from 'react';
import { FlatList, View } from 'react-native';
import DataBarangAsetItem from './(component)/data-barang-aset-item';
import CustomStateView from '@/components/CustomStateView';
import { useDataBarangAset } from './(hooks)/use-data-barang-aset';

export default function DataBarangAsetPage() {
  const { dataBarangAsetList, dataBarangAsetState } = useDataBarangAset();

  return (
    <View className='flex-1 bg-white'>
      <CustomAppbar options={{ headerTitle: 'Data Barang Aset' }} />

      <CustomStateView
        state={dataBarangAsetState}
        Content={
          <FlatList
            className='flex-1 p-4'
            data={dataBarangAsetList}
            renderItem={({ item }) => <DataBarangAsetItem key={item.noBarang} data={item} />}
          />
        }
      />
    </View>
  );
}
