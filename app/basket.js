import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  Platform,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { useBasket } from '../providers/BasketProvider';
import BasketListItems from '../components/BasketListItems';
import EmptyState from '../components/EmptyState';
import CustomButton from '../components/CustomButton';

const BasketScreen = () => {
  const { items, total } = useBasket();

  return (
    <SafeAreaView className='flex  h-full mt-3'>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
        renderItem={({ item }) => <BasketListItems basketItem={item} />}
        // empty state
        ListEmptyComponent={() => (
          <EmptyState title='Your Backet is Empty' subtitle='Add Items' />
        )}
      />

      {total !== 0 && (
        <>
          <Text className='m-4 text-2xl font-psemibold'>Total: R{total}</Text>
          <CustomButton
            title='Checkout'
            // handlePress={() => router.push('/home')}
            containerStyles='mx-5 mb-5'
          />
        </>
      )}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});
