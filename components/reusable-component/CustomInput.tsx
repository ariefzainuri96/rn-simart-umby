import React, { ComponentPropsWithoutRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

type CustomInputProps = {
  label?: string;
  className?: string;
  error?: string;
  minHeight?: number;
  maxHeight?: number;
} & ComponentPropsWithoutRef<typeof TextInput>;

const CustomInput = ({
  label,
  error,
  className,
  minHeight,
  maxHeight,
  ...props
}: CustomInputProps) => {
  return (
    <View className={twMerge('flex w-full flex-col items-start', className)}>
      {label && (
        <Text className='line-clamp-1 text-ellipsis font-SfPro400 text-[.75rem] text-gray3'>
          {label}
        </Text>
      )}
      <TextInput
        style={{
          minHeight: minHeight,
          maxHeight: maxHeight,
          textAlignVertical: 'top',
        }}
        placeholder={props.placeholder ?? label}
        className='mt-1 w-full rounded-[4px] border-[1px] border-gray5 px-[1rem] py-[.75rem] font-SfPro300 text-[.875rem] text-gray1'
        {...props}
      />
      {error && <Text className='mt-1 font-SfPro300 text-[.75rem] text-red1'>{error}</Text>}
    </View>
  );
};

export default CustomInput;
