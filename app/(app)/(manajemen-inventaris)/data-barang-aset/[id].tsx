import ButtonBottomSheet from '@/features/(app)/(manajemen-inventaris)/data-barang-aset/[id]/components/button-bottom-sheet';
import Column from '@/components/Column';
import CustomAppbar from '@/components/CustomAppbar';
import CustomButtonBottomSheet from '@/components/CustomButtonBottomSheet';
import CustomCheckbox from '@/components/CustomCheckbox';
import CustomDatePicker from '@/components/CustomDatePicker';
import CustomInput from '@/components/CustomInput';
import CustomStateView from '@/components/CustomStateView';
import Row from '@/components/Row';
import StandartBottomSheetItem from '@/components/StandartBottomSheetItem';
import { defaultValue, getState } from '@/helper/utils';
import useEditDataBarangAset from '@/features/(app)/(manajemen-inventaris)/data-barang-aset/[id]/hooks/use-edit-data-barang-aset';
import { format, parse } from 'date-fns';
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

                <CustomButtonBottomSheet
                  className='flex-1'
                  label={'Vendor'}
                  value={defaultValue(form.vendor, 'Pilih Vendor')}
                >
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
                  value={defaultValue(form.kategoriAset, 'Pilih Kategori Aset')}
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
                  value={defaultValue(form.subKategoriAset, 'Pilih Sub Kategori Aset')}
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
                <CustomButtonBottomSheet
                  className='flex-1'
                  label={'Lokasi'}
                  value={defaultValue(form.location, 'Pilih Lokasi')}
                >
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
                  value={defaultValue(form.availability, 'Pilih Availability')}
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
                  value={defaultValue(form.convidentality, 'Pilih Convidentality')}
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
                  value={defaultValue(form.integrity, 'Pilih Integrity')}
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

              <Row className='gap-3'>
                <CustomDatePicker
                  className='flex-1'
                  value={parse(form.tanggalAkuisisi ?? '01/01/2010', 'dd/MM/yyyy', new Date(2010))}
                  label='Tanggal Akuisisi'
                  onDateChange={(date) => {
                    const timeZoneOffsetInMinutes = new Date().getTimezoneOffset();
                    handleChange(
                      'tanggalAkuisisi',
                      format(new Date(date.setMinutes(-timeZoneOffsetInMinutes)), 'dd/MM/yyyy')
                    );
                  }}
                />

                <CustomDatePicker
                  className='flex-1'
                  value={parse(
                    form.tanggalDepresiasi ?? '01/01/2010',
                    'dd/MM/yyyy',
                    new Date(2010)
                  )}
                  label='Tanggal Depresiasi'
                  onDateChange={(date) => {
                    const timeZoneOffsetInMinutes = new Date().getTimezoneOffset();
                    handleChange(
                      'tanggalDepresiasi',
                      format(new Date(date.setMinutes(-timeZoneOffsetInMinutes)), 'dd/MM/yyyy')
                    );
                  }}
                />
              </Row>
            </Column>
          </ScrollView>
        }
      />
    </View>
  );
}
