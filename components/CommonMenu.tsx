import React, { ComponentPropsWithoutRef } from 'react';
import { Text, View } from 'react-native';
import Row from './Row';
import Ionicons from '@expo/vector-icons/Ionicons';
import { twMerge } from 'tailwind-merge';

type CommonMenuProps = {
  title: string;
  textColor?: string;
  className?: string;
} & ComponentPropsWithoutRef<typeof View>;

const CommonMenu = ({ title, className, textColor, ...props }: CommonMenuProps) => {
  return (
    <Row className={twMerge('w-full border-b-[1px] border-b-[#EFEFEF] p-4', className)} {...props}>
      <Text style={{ color: textColor }} className='sfPro500-16 flex-1'>
        {title}
      </Text>
      <Ionicons name='chevron-forward' size={16} color='#465478' />
    </Row>
  );
};

export default CommonMenu;
