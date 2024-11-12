import React, { ComponentPropsWithoutRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type CustomInputProps = {
  label?: string;
  className?: string;
} & ComponentPropsWithoutRef<typeof TextInput>;

const CustomInput = ({ label, className, ...props }: CustomInputProps) => {
  return (
    <View className={twMerge('flex w-full flex-col items-start', className)}>
      {label && (
        <Text className='font-SfPro400 text-gray3 line-clamp-1 text-ellipsis text-[.75rem]'>
          {label}
        </Text>
      )}
      <TextInput
        className='font-SfPro300 text-gray1 border-gray5 mt-1 w-full rounded-[4px] border-[1px] px-[1rem] py-[.75rem] text-[.875rem]'
        {...props}
      />
    </View>
  );
};

export default CustomInput;
