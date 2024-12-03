import CustomAppbar from '@/components/CustomAppbar';
import React from 'react';
import { FlatList, View } from 'react-native';
import DataBarangAsetItem from './(component)/data-barang-aset-item';
import CustomStateView from '@/components/CustomStateView';
import useDataBarangAset from './(hooks)/use-data-barang-aset';
import Constants from 'expo-constants';

export default function DataBarangAsetPage() {
  const { dataBarangAsetList, fetchData, dataBarangAsetState } = useDataBarangAset();

  return (
    <View className='flex-1 bg-white'>
      <CustomAppbar options={{ headerTitle: 'Data Barang Aset' }} />

      <CustomStateView
        state={dataBarangAsetState}
        onRetry={fetchData}
        Content={
          <FlatList
            className='flex-1 p-4'
            contentContainerStyle={{
              paddingBottom: Constants.statusBarHeight,
            }}
            data={dataBarangAsetList}
            renderItem={({ item, index }) => (
              <DataBarangAsetItem
                className={
                  index === 0 ? 'mt-0' : index === dataBarangAsetList.length - 1 ? 'my-2' : 'mt-2'
                }
                key={item.noBarang}
                data={item}
              />
            )}
          />
        }
      />
    </View>
  );
}
