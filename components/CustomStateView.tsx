import { RequestState } from '@/model/common-enum';
import React from 'react';
import { Text, View } from 'react-native';
import Column from './Column';
import { Ionicons } from '@expo/vector-icons';

type CustomStateViewProps = {
  state: RequestState;
  Error?: React.ReactNode;
  Loading?: React.ReactNode;
  Content: React.ReactNode;
  onRetry?: () => void;
  errorMarginTop?: number;
};

const CustomStateView = ({
  state,
  errorMarginTop,
  onRetry,
  Error,
  Loading,
  Content,
}: CustomStateViewProps) => {
  if (state === RequestState.LOADING) {
    return Loading ? <>{Loading}</> : <Text>Loading...</Text>;
  }

  if (state === RequestState.ERROR) {
    return Error ? (
      <>{Error}</>
    ) : (
      <View style={{ marginTop: errorMarginTop }} className='flex w-full flex-row justify-center'>
        <Column className='items-center gap-2 rounded-md bg-white p-3 shadow-md'>
          <Text className='sfPro400-14 text-center text-gray1'>
            Failed to get data, please try again later.{' '}
            <Text onPress={onRetry} className='sfPro400-14 text-primary underline'>
              Retry?
            </Text>
          </Text>
          <Ionicons name='warning-outline' size={24} color='red' />
        </Column>
      </View>
    );
  }

  return <>{Content}</>;
};

export default CustomStateView;
