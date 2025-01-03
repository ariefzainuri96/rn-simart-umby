import Column from '@/components/Column';
import CustomAppbar from '@/components/CustomAppbar';
import CustomButton from '@/components/CustomButton';
import Row from '@/components/Row';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import IcClose from '@/assets/icons/ic-close.svg';
import IcFlash from '@/assets/icons/ic-flash.svg';
import IcBorderBl from '@/assets/icons/ic-border-bl.svg';
import IcBorderBr from '@/assets/icons/ic-border-br.svg';
import IcBorderTl from '@/assets/icons/ic-border-tl.svg';
import IcBorderTr from '@/assets/icons/ic-border-tr.svg';

export default function ScannerPage() {
  const [permission, requestPermission] = useCameraPermissions();
  const [torchEnabled, setTorchEnabled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!permission) return; // Skip if permission is still loading

    if (permission.status !== 'granted') {
      // Request permission if not granted or undetermined
      requestPermission();
    }
  }, [permission, requestPermission]);

  if (!permission?.granted) {
    // Camera permissions are not granted yet.
    return (
      <View className='flex-1 justify-center bg-white px-10'>
        <CustomAppbar options={{ headerShown: false }} />
        <Column className='rounded-lg border border-slate-400 bg-slate-50 py-2'>
          <Text className='sfPro600-14 px-4 text-[1.25rem] text-gray1'>Enable Camera Access</Text>
          <Text className='sfPro500-14 px-4 text-gray'>
            We need your permission to access the camera
          </Text>
          <View className='my-2 h-[2px] w-full bg-lineSeparator' />
          <Row className='w-full gap-4 px-4'>
            <CustomButton
              onPress={() => {
                router.back();
              }}
              buttonHeight={38}
              className='flex-1 bg-slate-500'
              label='Cancel'
            />
            <CustomButton
              onPress={requestPermission}
              buttonHeight={38}
              className='flex-1'
              label='Allow'
            />
          </Row>
        </Column>
      </View>
    );
  }

  return (
    <View className='flex-1'>
      <CustomAppbar options={{ headerShown: false }} />

      <CameraView
        enableTorch={torchEnabled}
        style={{ flex: 1 }}
        facing='back'
        barcodeScannerSettings={{
          barcodeTypes: ['qr'],
        }}
        onBarcodeScanned={({ data }) => {
          console.log('Barcode scanned!', data);
        }}
      >
        <SafeAreaView className='flex-1'>
          <Column className='flex-1'>
            <Row className='w-full justify-between p-6'>
              <TouchableOpacity onPress={() => router.back()}>
                <View className='flex items-center justify-center rounded-full bg-[#FFFFFF26] p-2'>
                  <IcClose width={20} height={20} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setTorchEnabled((prev) => !prev)}>
                <View className='flex items-center justify-center rounded-full bg-[#FFFFFF26] p-2'>
                  <IcFlash width={20} height={20} />
                </View>
              </TouchableOpacity>
            </Row>
            <Column className='w-full flex-1 items-center justify-center'>
              <View className='relative h-[250px] w-[250px]'>
                <IcBorderTl style={{ position: 'absolute', left: 0, top: 0 }} />
                <IcBorderTr style={{ position: 'absolute', right: 0, top: 0 }} />
                <IcBorderBl style={{ position: 'absolute', left: 0, bottom: 0 }} />
                <IcBorderBr style={{ position: 'absolute', right: 0, bottom: 0 }} />
              </View>
            </Column>
          </Column>
        </SafeAreaView>
      </CameraView>
    </View>
  );
}
