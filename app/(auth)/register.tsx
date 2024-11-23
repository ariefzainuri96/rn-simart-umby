import { useAuth } from '@/context/auth';
import React from 'react';
import { View, Button, Text } from 'react-native';

const RegisterPage = () => {
  const auth = useAuth();

  return (
    <View className='h-screen w-screen'>
      <View className='flex h-full flex-col items-center justify-center'>
        <Text>Register Page</Text>
        <Button title='Login' onPress={() => auth?.signIn('')} />
      </View>
    </View>
  );
};

export default RegisterPage;
