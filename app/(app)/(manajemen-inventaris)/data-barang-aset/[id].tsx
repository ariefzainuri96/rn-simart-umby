import ButtonBottomSheet from '@/components/page-component/data-barang-aset/[id]/button-bottom-sheet';
import Column from '@/components/reusable-component/Column';
import CustomAppbar from '@/components/reusable-component/CustomAppbar';
import CustomButtonBottomSheet from '@/components/reusable-component/CustomButtonBottomSheet';
import CustomCheckbox from '@/components/reusable-component/CustomCheckbox';
import CustomDatePicker from '@/components/reusable-component/CustomDatePicker';
import CustomInput from '@/components/reusable-component/CustomInput';
import CustomStateView from '@/components/reusable-component/CustomStateView';
import Row from '@/components/reusable-component/Row';
import StandartBottomSheetItem from '@/components/reusable-component/StandartBottomSheetItem';
import { getState } from '@/helper/utils';
import useEditDataBarangAset from '@/hooks/data-barang-aset/use-edit-data-barang-aset';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView, View } from 'react-native';

export default function DataBarangAsetDetailPage() {
  const { id } = useLocalSearchParams();

  const {
    form,
    handleChange,
    queryVendor,
    queryKategoriAset,
    querySubKategoriAset,
    kategoriAset,
    subKategoriAset,
    vendor,
  } = useEditDataBarangAset(id.toString());

  return (
    <View className='flex-1 bg-white'>
      <CustomAppbar headerTitle={'Edit Data Barang Aset'} />
      <CustomStateView
        state={getState(queryVendor.isLoading, queryVendor.isError)}
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

                <CustomButtonBottomSheet className='flex-1' label={'Vendor'} value={form.vendor}>
                  <ButtonBottomSheet
                    renderItem={(item, _) => (
                      <StandartBottomSheetItem
                        onPress={() => handleChange('vendor', item)}
                        content={item}
                      />
                    )}
                    items={vendor}
                    keyExtractor={(_, i) => i.toString()}
                    onEndReached={() => queryVendor.fetchNextPage()}
                  />
                </CustomButtonBottomSheet>
              </Row>

              <Row className='w-full gap-3'>
                <CustomButtonBottomSheet
                  className='flex-1'
                  label={'Kategori Aset'}
                  value={form.kategoriAset}
                >
                  <ButtonBottomSheet
                    renderItem={(item, _) => (
                      <StandartBottomSheetItem
                        onPress={() => handleChange('kategoriAset', item)}
                        content={item}
                      />
                    )}
                    items={kategoriAset}
                    keyExtractor={(_, i) => i.toString()}
                    onEndReached={() => queryKategoriAset.fetchNextPage()}
                  />
                </CustomButtonBottomSheet>

                <CustomButtonBottomSheet
                  className='flex-1'
                  label={'Sub Kategori Aset'}
                  value={form.subKategoriAset}
                >
                  <ButtonBottomSheet
                    renderItem={(item, _) => (
                      <StandartBottomSheetItem
                        onPress={() => handleChange('subKategoriAset', item)}
                        content={item}
                      />
                    )}
                    items={subKategoriAset}
                    keyExtractor={(_, i) => i.toString()}
                    onEndReached={() => querySubKategoriAset.fetchNextPage()}
                  />
                </CustomButtonBottomSheet>
              </Row>

              <Row className='w-full gap-3'>
                <CustomButtonBottomSheet className='flex-1' label={'Lokasi'} value={form.location}>
                  <ButtonBottomSheet
                    renderItem={(item, _) => (
                      <StandartBottomSheetItem
                        onPress={() => handleChange('location', item)}
                        content={item}
                      />
                    )}
                    items={vendor}
                    keyExtractor={(_, i) => i.toString()}
                    onEndReached={() => queryVendor.fetchNextPage()}
                  />
                </CustomButtonBottomSheet>

                <CustomButtonBottomSheet
                  className='flex-1'
                  label={'Availability'}
                  value={form.availability}
                >
                  <ButtonBottomSheet
                    renderItem={(item, _) => (
                      <StandartBottomSheetItem
                        onPress={() => handleChange('availability', item)}
                        content={item}
                      />
                    )}
                    items={subKategoriAset}
                    keyExtractor={(_, i) => i.toString()}
                  />
                </CustomButtonBottomSheet>
              </Row>

              <Row className='w-full gap-3'>
                <CustomButtonBottomSheet
                  className='flex-1'
                  label={'Convidentality'}
                  value={form.convidentality}
                >
                  <ButtonBottomSheet
                    renderItem={(item, _) => (
                      <StandartBottomSheetItem
                        onPress={() => handleChange('convidentality', item)}
                        content={item}
                      />
                    )}
                    items={vendor}
                    keyExtractor={(_, i) => i.toString()}
                  />
                </CustomButtonBottomSheet>

                <CustomButtonBottomSheet
                  className='flex-1'
                  label={'Integrity'}
                  value={form.integrity}
                >
                  <ButtonBottomSheet
                    renderItem={(item, _) => (
                      <StandartBottomSheetItem
                        onPress={() => handleChange('integrity', item)}
                        content={item}
                      />
                    )}
                    items={subKategoriAset}
                    keyExtractor={(_, i) => i.toString()}
                  />
                </CustomButtonBottomSheet>
              </Row>

              <CustomDatePicker
                value={new Date()}
                label='Tanggal Akuisisi'
                onDateChange={(date) => {
                  const timeZoneOffsetInMinutes = new Date().getTimezoneOffset();
                  console.log('selectedDate', new Date(date.setMinutes(-timeZoneOffsetInMinutes)));
                }}
              />
            </Column>
          </ScrollView>
        }
      />
    </View>
  );
}
