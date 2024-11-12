import React, { ComponentPropsWithoutRef } from 'react';
import { Button, Pressable, Text, TouchableNativeFeedback, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { twMerge } from 'tailwind-merge';

type CustomButtonProps = {
  Icon?: React.ReactNode;
  label: string;
  textColor?: string;
  className?: string;
  rippleColor?: string;
} & ComponentPropsWithoutRef<typeof TouchableNativeFeedback>;

const CustomButton = ({
  Icon,
  label,
  className,
  rippleColor,
  textColor,
  ...props
}: CustomButtonProps) => {
  return (
    <View className={twMerge('overflow-hidden rounded-[8px] bg-primary', className)}>
      <TouchableNativeFeedback
        // background={TouchableNativeFeedback.Ripple(rippleColor ?? '#BFBFBF', false)}
        {...props}
      >
        <View
          className={twMerge(
            'flex h-[53px] flex-row items-center justify-center rounded-[8px]',
            Icon && 'gap-4'
          )}
        >
          <Text className={twMerge('font-SfPro500 text-[.875rem] text-white', textColor)}>
            {label}
          </Text>
          {Icon}
        </View>
      </TouchableNativeFeedback>
    </View>
  );
};

export default CustomButton;
