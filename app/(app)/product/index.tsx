import { useAuth } from '@/context/auth';
import { Link } from 'expo-router';
import { Button, ScrollView, Text, View } from 'react-native';

const ProductPage = () => {
  const auth = useAuth();

  return (
    <ScrollView>
      <View className='flex flex-col items-start p-4'>
        <Text>Product Page</Text>
        <Link href={'/(app)/product/1'}>Product 1</Link>
        <Link href={'/(app)/product/2'}>Product 2</Link>
        <Link href={'/(app)/product/filter'}>Filter</Link>
        <Button title='Logout' onPress={() => auth?.signOut()} />
      </View>
    </ScrollView>
  );
};

export default ProductPage;
