import {
  Text,
  View,
  SafeAreaView,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import EmptyState from '../../../components/EmptyState';
import { products } from '../../../assets/data/products';
import { services } from '../../../assets/data/services';
import Services from '../../../components/Services';
import ServiceCard from '../../../components/ServiceCard';
import { useBasket } from '../../../providers/BasketProvider';
import { router } from 'expo-router';

const index = () => {
  const { items: basketItems, total } = useBasket();

  return (
    <SafeAreaView className='flex-1'>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        // list of services
        renderItem={({ item }) => {
          return <ServiceCard item={item} />;
        }}
        // header
        ListHeaderComponent={() => (
          <View className='flex my-6 px-4 space-y-6'>
            {/* username and logo */}
            <View className='flex justify-between items-center flex-row mb-6'>
              <View>
                <Text className='font-pmedium text-sm text-gray-500'>
                  Welcome Back
                </Text>
                <Text className='text-2xl font-psemibold text-primary'>
                  Mohamed!
                </Text>
              </View>

              <View className='mt-1.5'>
                <Image
                  source={require('../../../assets/images/logo.png')}
                  className='w-20 h-16'
                  resizeMode='contain'
                />
              </View>
            </View>
            {/* services */}
            <View className=''>
              <Text className='text-xl font-psemibold  text-primary mb-3'>
                Our Services
              </Text>

              <Services Services={services ?? []} />
            </View>
          </View>
        )}
        // empty state
        ListEmptyComponent={() => (
          <EmptyState title='No Items Found' subtitle='No items created yet' />
        )}
      />
      {basketItems.length > 0 && (
        <View className='bg-secondary p-3 rounded-2xl mx-3 my-3 flex flex-row justify-between items-center'>
          <View>
            <Text className='text-lg font-pmedium text-white'>
              {basketItems.length} items | R {total}
            </Text>
            <Text className='text-md font-pregular my-2 text-white'>
              extra charges might apply
            </Text>
          </View>

          <Pressable onPress={() => router.navigate('basket')}>
            <Text className='text-white text-lg font-pmedium'>
              Proceed to Basket
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};
export default index;
