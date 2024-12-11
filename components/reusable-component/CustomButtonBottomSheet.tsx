import { BottomSheetBackdrop, BottomSheetModal } from '@gorhom/bottom-sheet';
import { ReactNode, useCallback, useMemo, useRef } from 'react';
import { Dimensions, Pressable, Text } from 'react-native';
import Column from './Column';
import Row from './Row';
import { Ionicons } from '@expo/vector-icons';

type CustomButtonBottomSheetProps = {
  label?: string;
  value: string;
  children: ReactNode;
  className?: string;
};

export default function CustomButtonBottomSheet({
  label,
  value,
  children,
  className,
}: CustomButtonBottomSheetProps) {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const { height: screenHeight } = Dimensions.get('window');
  const snapPoints = useMemo(() => ['50%'], []);

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

  return (
    <>
      <Column className={className}>
        {label && <Text className='sfPro500-14 text-gray3'>{label}</Text>}
        <Pressable onPress={handlePresentModalPress}>
          <Row className='mt-1 w-full gap-2 rounded-[4px] border border-[#E0E0E0] px-4 py-3'>
            <Text className='sfPro300-14 line-clamp-1 flex-1 text-ellipsis'>{value}</Text>
            <Ionicons name='chevron-down' size={16} color='#333333' />
          </Row>
        </Pressable>
      </Column>
      <BottomSheetModal
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        // onChange={handleSheetChanges}
        backdropComponent={renderBackdrop}
        maxDynamicContentSize={screenHeight * 0.5}
        handleComponent={null}
      >
        {children}
      </BottomSheetModal>
    </>
  );
}
