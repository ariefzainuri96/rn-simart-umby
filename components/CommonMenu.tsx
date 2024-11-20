import React, { ComponentPropsWithoutRef } from 'react';
import { Text, View } from 'react-native';
import Row from './Row';
import Ionicons from '@expo/vector-icons/Ionicons';

type CommonMenuProps = {
  title: string;
} & ComponentPropsWithoutRef<typeof View>;

const CommonMenu = ({ title, ...props }: CommonMenuProps) => {
  return (
    <Row className='w-full border-b-[1px] border-b-[#EFEFEF] p-4' {...props}>
      <Text className='sfPro500-16 flex-1'>{title}</Text>
      <Ionicons name='chevron-forward' size={16} color='#465478' />
    </Row>
  );
};

export default CommonMenu;
