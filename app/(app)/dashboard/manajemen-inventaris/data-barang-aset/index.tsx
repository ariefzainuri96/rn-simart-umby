import CollapsibleView from '@/components/CollapsibleView';
import Column from '@/components/Column';
import CustomAppbar from '@/components/CustomAppbar';
import CustomExpandable from '@/components/CustomExpandable';
import React, { useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DataBarangAsetPage() {
  const [expanded, setExpanded] = useState(false);

  return (
    <View className='flex-1'>
      <CustomAppbar options={{ headerTitle: 'Data Barang Aset' }} />

      <ScrollView>
        <Text onPress={() => setExpanded(!expanded)}>test</Text>
        <CollapsibleView isExpanded={expanded}>
          <Column>
            <Text>Testing Expanded content</Text>
            <Text>Testing Expanded content</Text>
          </Column>
        </CollapsibleView>
        {/* <CustomExpandable title={'header'} content={'expanded'} /> */}
      </ScrollView>
    </View>
  );
}
