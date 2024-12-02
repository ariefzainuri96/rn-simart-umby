import CollapsibleView from '@/components/CollapsibleView';
import Column from '@/components/Column';
import Row from '@/components/Row';
import { DataBarangAsetModel } from '@/model/data-barang-aset/data-barang-aset-model';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

type DataBarangAsetItemProps = {
  data: DataBarangAsetModel;
};

export default function DataBarangAsetItem({ data }: DataBarangAsetItemProps) {
  return (
    <Column className='rounded-md bg-white p-4 shadow-md'>
      <Row className='w-full'>
        <Text className='sfPro500-14 flex-1'>{data.namaBarang}</Text>
        <Ionicons name='ellipsis-vertical' size={16} color='#333333' />
      </Row>

      <Row className='mt-1 w-full'>
        <Text className='sfPro400-12 flex-1 text-gray3'>{data.noBarang}</Text>
        <Text className='sfPro400-12 flex-1 text-right text-gray3'>
          {data.jumlah} Unit . {data.ruang}
        </Text>
      </Row>

      <View className='mt-2 h-[1px] w-full bg-lineSeparator' />

      <CollapsibleView className='mt-2' header={<HeaderMenu title={'Deskripsi'} />}>
        <Text className='sfPro300-14 text-gray3'>{data.deskripsi}</Text>
      </CollapsibleView>

      <View className='mt-2 h-[1px] w-full bg-lineSeparator' />

      <CollapsibleView className='mt-2' header={<HeaderMenu title={'Spesifikasi'} />}>
        <Text className='sfPro300-14 text-gray3'>{data.spesifikasi}</Text>
      </CollapsibleView>
    </Column>
  );
}

const HeaderMenu = ({ title }: { title: string }) => {
  return (
    <Row className='w-full'>
      <Text className='sfPro400-14 flex-1'>{title}</Text>
      <Ionicons name='chevron-down' size={16} color='#333333' />
    </Row>
  );
};
