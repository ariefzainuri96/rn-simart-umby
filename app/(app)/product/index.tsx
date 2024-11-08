import { Link } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';

const ProductPage = () => {
  return (
    <ScrollView>
      <View className='flex flex-col items-start'>
        <Text>Product Page</Text>
        <Link href={'/product/1'}>Product 1</Link>
        <Link href={'/product/2'}>Product 2</Link>
      </View>
    </ScrollView>
  );
};

export default ProductPage;
