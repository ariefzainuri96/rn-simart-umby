import { useAuth } from '@/context/auth';
import { Link } from 'expo-router';
import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';

const LoginPage = () => {
  const auth = useAuth();

  return (
    <View className='h-screen w-screen'>
      <View className='flex h-full flex-col items-center justify-center'>
        <Text>LoginPage</Text>
        <Button title='Login' onPress={() => auth?.signIn()} />
        <Link href={'/(auth)/register'} asChild>
          <Pressable>{({ pressed }) => <Text className='mt-2 underline'>Register</Text>}</Pressable>
        </Link>
      </View>
    </View>
  );
};

export default LoginPage;
