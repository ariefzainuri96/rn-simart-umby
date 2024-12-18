import CollapsibleView from '@/components/CollapsibleView';
import Column from '@/components/Column';
import CustomPopupMenu from '@/components/CustomPopupMenu';
import Row from '@/components/Row';
import { DataBarangAsetModel } from '@/features/(app)/(manajemen-inventaris)/data-barang-aset/index/types/data-barang-aset-model';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ReactNode, useEffect, useRef } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type DataBarangAsetItemProps = {
  data: DataBarangAsetModel;
  className?: string;
};

type TDataBarangAsetMenu = {
  title: string;
  Icon: ReactNode;
};

export default function DataBarangAsetItem({ data, className }: DataBarangAsetItemProps) {
  const router = useRouter();
  const menu: TDataBarangAsetMenu[] = [
    {
      title: 'Edit',
      Icon: <Ionicons name='pencil' color={'#333333'} size={16} />,
    },
    {
      title: 'Hapus',
      Icon: <Ionicons name='trash-bin' color={'#FF5D5D'} size={16} />,
    },
  ];

  return (
    <Column className={twMerge('rounded-md bg-white p-4 shadow-md', className)}>
      <Row className='w-full'>
        <Text className='sfPro500-14 flex-1'>{data.namaBarang}</Text>
        <CustomPopupMenu
          triggerChild={<Ionicons name='ellipsis-vertical' size={16} color='#333333' />}
        >
          {menu.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  switch (index) {
                    case 0:
                      console.log(`Edit pressed`);
                      router.push(
                        `/(app)/(manajemen-inventaris)/data-barang-aset/${data.namaBarang}`
                      );
                      break;
                    case 1:
                      console.log(`Hapus pressed`);
                      break;
                    default:
                      break;
                  }
                }}
              >
                <Row className={twMerge('gap-2 py-2', index === 0 && 'border-b border-b-slate-50')}>
                  {item.Icon}
                  <Text className={twMerge('sfPro500-14', index === 1 && 'text-[#FF5D5D]')}>
                    {item.title}
                  </Text>
                </Row>
              </TouchableOpacity>
            );
          })}
        </CustomPopupMenu>
      </Row>

      <Row className='mt-1 w-full'>
        <Text className='sfPro400-12 flex-1 text-gray3'>{data.noBarang}</Text>
        <Text className='sfPro400-12 flex-1 text-right text-gray3'>
          {data.jumlah} Unit . {data.ruang}
        </Text>
      </Row>

      <View className='mt-2 h-[1px] w-full bg-lineSeparator' />

      <CollapsibleView
        className='mt-2'
        header={(expanded) => <HeaderMenu title={'Deskripsi'} expanded={expanded} />}
      >
        <Text className='sfPro300-14 text-gray3'>{data.deskripsi}</Text>
      </CollapsibleView>

      <View className='mt-2 h-[1px] w-full bg-lineSeparator' />

      <CollapsibleView
        className='mt-2'
        header={(expanded) => <HeaderMenu title={'Spesifikasi'} expanded={expanded} />}
      >
        <Text className='sfPro300-14 text-gray3'>{data.spesifikasi}</Text>
      </CollapsibleView>
    </Column>
  );
}

const HeaderMenu = ({ title, expanded }: { title: string; expanded: boolean }) => {
  const rotateValue = useRef(new Animated.Value(0)).current; // Create animated value

  useEffect(() => {
    Animated.timing(rotateValue, {
      toValue: expanded ? 1 : 0, // 0 for original, 1 for 180deg
      duration: 300, // Duration of the animation
      useNativeDriver: true, // Optimize for native animations
    }).start(); // Start the animation
  }, [expanded]);

  // Interpolate rotateValue to generate rotation values
  const rotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'], // Rotate from 0 to 180 degrees
  });

  return (
    <Row className='w-full'>
      <Text className='sfPro400-14 flex-1'>{title}</Text>
      <Animated.View style={{ transform: [{ rotate: rotation }] }}>
        <Ionicons color={'#333333'} size={16} name='chevron-down' />
      </Animated.View>
    </Row>
  );
};
