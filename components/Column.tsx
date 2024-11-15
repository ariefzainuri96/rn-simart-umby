import React from 'react';
import { View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
};

const Column = ({ children, className }: ColumnProps) => {
  return <View className={twMerge('flex flex-col items-start', className)}>{children}</View>;
};

export default Column;
