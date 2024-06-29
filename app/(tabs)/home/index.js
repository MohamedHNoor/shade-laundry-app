import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  FlatList,
} from 'react-native';
import EmptyState from '../../../components/EmptyState';
import { items, services } from '../../../assets/data';
import Services from '../../../components/Services';
import ServiceCard from '../../../components/ServiceCard';

const index = () => {
  return (
    <SafeAreaView className=''>
      <FlatList
        data={items}
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

              {/* <Trending posts={latestPosts ?? []} /> */}
              <Services Services={services ?? []} />
            </View>
          </View>
        )}
        // empty state
        ListEmptyComponent={() => (
          <EmptyState
            title='No Services Found'
            subtitle='No Services created yet'
          />
        )}
      />
    </SafeAreaView>
  );
};
export default index;
