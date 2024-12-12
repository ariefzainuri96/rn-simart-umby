import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { ReactNode, useCallback, useEffect, useRef } from 'react';
import { Dimensions, Pressable, Text } from 'react-native';
import Column from './Column';
import Row from './Row';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type CustomButtonBottomSheetProps = {
  label?: string;
  value?: string;
  bottomSheetTitle?: string;
  children: ReactNode;
  className?: string;
  enable?: boolean;
};

export default function CustomButtonBottomSheet({
  label,
  value,
  children,
  enable = true,
  bottomSheetTitle = 'Pilih Item',
  className,
}: CustomButtonBottomSheetProps) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { height: screenHeight } = Dimensions.get('window');
  // const snapPoints = useMemo(() => ['50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  const renderBackdrop = useCallback(
    (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
    []
  );

  useEffect(() => {
    bottomSheetRef.current?.close();
  }, [value]);

  return (
    <>
      <Column className={className}>
        {label && <Text className='sfPro500-14 text-gray3'>{label}</Text>}
        <Pressable onPress={handlePresentModalPress}>
          <Row
            className={twMerge(
              'mt-1 w-full gap-2 rounded-[4px] border border-[#E0E0E0] px-4 py-3',
              !enable && 'bg-[#F8F8F8]'
            )}
          >
            <Text className='sfPro300-14 line-clamp-1 flex-1 text-ellipsis'>
              {value ?? `Pilih ${label}`}
            </Text>
            <Ionicons name='chevron-down' size={16} color='#333333' />
          </Row>
        </Pressable>
      </Column>
      <BottomSheetModal
        // leave it to empty if we want the height to be dynamic
        // snapPoints={snapPoints}
        ref={bottomSheetRef}
        // onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        maxDynamicContentSize={screenHeight * 0.5}
        handleComponent={null}
        enablePanDownToClose={false}
      >
        {/* Header */}
        <Row className='w-full gap-4 px-4 py-2'>
          <Pressable onPress={() => bottomSheetRef.current?.close()}>
            <Ionicons name='close' size={20} color={'#333333'} />
          </Pressable>
          <Text className='flex-1'>{bottomSheetTitle}</Text>
        </Row>
        {children}
      </BottomSheetModal>
    </>
  );
}
