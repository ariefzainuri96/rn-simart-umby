import ButtonBottomSheet from '@/components/page-component/data-barang-aset/[id]/button-bottom-sheet';
import Column from '@/components/reusable-component/Column';
import CustomAppbar from '@/components/reusable-component/CustomAppbar';
import CustomButtonBottomSheet from '@/components/reusable-component/CustomButtonBottomSheet';
import CustomCheckbox from '@/components/reusable-component/CustomCheckbox';
import CustomInput from '@/components/reusable-component/CustomInput';
import CustomStateView from '@/components/reusable-component/CustomStateView';
import Row from '@/components/reusable-component/Row';
import StandartBottomSheetItem from '@/components/reusable-component/StandartBottomSheetItem';
import useEditDataBarangAset from '@/hooks/data-barang-aset/use-edit-data-barang-aset';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

export default function DataBarangAsetDetailPage() {
  const { id } = useLocalSearchParams();

  const { form, handleChange, vendor, getVendor, vendorState, state } = useEditDataBarangAset(
    id.toString()
  );

  return (
    <View className='flex-1 bg-white'>
      <CustomAppbar headerTitle={'Edit Data Barang Aset'} />
      <CustomStateView
        state={state}
        Content={
          <ScrollView
            contentContainerStyle={{
              paddingVertical: 16,
              paddingHorizontal: 16,
            }}
          >
            <Column className='gap-4'>
              <CustomInput
                value={form.noInventaris}
                editable={false}
                selectTextOnFocus={false}
                label='No Inventaris'
              />

              <CustomInput
                value={form.namaAset}
                label='Nama Aset'
                onChange={(e) => handleChange('namaAset', e.nativeEvent.text)}
              />

              <CustomInput
                value={form.deskripsiAset}
                label='Deskripsi Aset'
                minHeight={82}
                maxHeight={150}
                multiline={true}
                onChange={(e) => handleChange('deskripsiAset', e.nativeEvent.text)}
              />

              <CustomInput
                value={form.spesifikasiAset}
                label='Spesifikasi Aset'
                minHeight={82}
                maxHeight={150}
                multiline={true}
                onChange={(e) => handleChange('spesifikasiAset', e.nativeEvent.text)}
              />

              <CustomCheckbox
                label='Aset SPK ?'
                value={form.isAsetSPK}
                onValueChange={(value) => handleChange('isAsetSPK', value)}
                handleOnPress={() => handleChange('isAsetSPK', !(form.isAsetSPK ?? false))}
              />

              <Row className='w-full gap-3'>
                <CustomInput
                  value={form.noSPK}
                  label='No SPK'
                  className='flex-1'
                  onChange={(e) => handleChange('noSPK', e.nativeEvent.text)}
                />

                <CustomButtonBottomSheet className='flex-1' label={'Vendor'} value={'Value'}>
                  <ButtonBottomSheet
                    renderItem={(item, _) => (
                      <StandartBottomSheetItem
                        onPress={() => {
                          console.log('click, ', item);
                        }}
                        content={item}
                      />
                    )}
                    items={vendor}
                    keyExtractor={(_, i) => i.toString()}
                    onEndReached={() => getVendor(false)}
                  />
                </CustomButtonBottomSheet>
              </Row>

              <Row className='w-full gap-3'>
                <CustomButtonBottomSheet className='flex-1' label={'Kategori Aset'} value={'Value'}>
                  <BottomSheetView className='flex-1'>
                    <Text>Bottom Sheet Content Kategori Aset</Text>
                  </BottomSheetView>
                </CustomButtonBottomSheet>

                <CustomButtonBottomSheet
                  className='flex-1'
                  label={'Sub Kategori Aset'}
                  value={'Value'}
                >
                  <BottomSheetView className='flex-1'>
                    <Text>Bottom Sheet Content Sub Kategori Aset</Text>
                  </BottomSheetView>
                </CustomButtonBottomSheet>
              </Row>
            </Column>
          </ScrollView>
        }
      />
    </View>
  );
}
