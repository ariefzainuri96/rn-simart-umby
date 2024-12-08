import CustomAppbar from '@/components/reusable-component/CustomAppbar';
import CustomButtonBottomSheet from '@/components/reusable-component/CustomButtonBottomSheet';
import Row from '@/components/reusable-component/Row';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function DataBarangAsetDetailPage() {
  const { id } = useLocalSearchParams();

  return (
    <View className='flex-1 bg-white'>
      <CustomAppbar headerTitle={`${id}`} />
      <ScrollView
        contentContainerStyle={{
          paddingTop: 16,
          paddingHorizontal: 16,
          flex: 1,
        }}
      >
        <Row className='w-full gap-3'>
          <CustomButtonBottomSheet className='flex-1' label={'Kategori Aset'} value={'Value'}>
            <BottomSheetView>
              <Text>Bottom Sheet Content 1</Text>
            </BottomSheetView>
          </CustomButtonBottomSheet>
          <CustomButtonBottomSheet className='flex-1' label={'Kategori Aset'} value={'Value'}>
            <BottomSheetView className='flex-1'>
              <Text>Bottom Sheet Content 2</Text>
            </BottomSheetView>
          </CustomButtonBottomSheet>
        </Row>
      </ScrollView>
    </View>
  );
}
