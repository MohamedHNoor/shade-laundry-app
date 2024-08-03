import {
  View,
  Text,
  Pressable,
  Image,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { useProduct } from '../../../api/products';
import EmptyState from '../../../components/EmptyState';

const ProductScreen = () => {
  const { id: idString } = useLocalSearchParams();

  const id = parseFloat(typeof idString === 'string' ? idString : idString[0]);

  const { data: product, error, isLoading } = useProduct(id);

  if (isLoading) return <ActivityIndicator />;

  if (error) return <EmptyState title='Failed to fetch product' />;

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          title: 'Menu',
          headerRight: () => (
            <Link href={`/(admin)/home/create?id=${id}`} asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name='pencil'
                    size={25}
                    color='#161622'
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Stack.Screen options={{ title: `Product #${product.id}` }} />
      <View className='flex flex-row items-center px-4 py-4 mt-5 mx-4 justify-between  bg-white rounded-lg'>
        <Image
          source={{ uri: product?.image }}
          className='w-12 h-12'
          resizeMode='contain'
        />

        <Text className='text-primary capitalize font-psemibold w-20 mb-2'>
          {product?.name}
        </Text>
        <Text className='text-base font-pregular text-secondary'>
          R {product?.price}
        </Text>
      </View>
    </SafeAreaView>
  );
};
export default ProductScreen;
