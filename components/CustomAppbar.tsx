import { Stack } from 'expo-router';
import React from 'react';

type CustomAppbarProps = {
  headerTitle?: string;
  statusBarTranslucent?: boolean;
  statusBarStyle?: 'light' | 'dark';
  headerTintColor?: string;
  backgroundColor?: string;
  statusBarColor?: string;
} & React.ComponentPropsWithoutRef<typeof Stack.Screen>;

const CustomAppbar = ({
  headerTitle,
  statusBarTranslucent = true,
  backgroundColor = '#1E3A8A',
  headerTintColor = '#FFF',
  statusBarStyle = 'light',
  statusBarColor = '#00000066',
  ...props
}: CustomAppbarProps) => {
  return (
    <Stack.Screen
      options={{
        headerTitle: headerTitle,
        headerTitleStyle: {
          fontFamily: 'SfPro500',
          fontSize: 18,
        },
        statusBarTranslucent: statusBarTranslucent,
        statusBarStyle: statusBarStyle,
        headerTintColor: headerTintColor,
        statusBarColor: statusBarColor,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        ...props.options,
      }}
    />
  );
};

export default CustomAppbar;
