import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { ReactElement } from 'react';
import { ListRenderItemInfo } from 'react-native';

type ButtonBottomSheetProps<T> = {
  onEndReached?: () => void;
  renderItem: (item: T, index: number) => ReactElement;
  items: T[];
  keyExtractor: (item: T, index: number) => string;
};

export default function ButtonBottomSheet<T>({
  onEndReached,
  renderItem,
  items,
  keyExtractor,
}: ButtonBottomSheetProps<T>) {
  return (
    <BottomSheetFlatList
      data={items}
      keyExtractor={(item, index) => keyExtractor(item, index)}
      renderItem={({ item, index }: ListRenderItemInfo<T>) => renderItem(item, index)}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 10,
      }}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.25}
    />
  );
}
