import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { router } from 'expo-router';
import { useBasket } from '../../../providers/BasketProvider';
import BasketListItems from '../../../components/BasketListItems';
import EmptyState from '../../../components/EmptyState';
import CustomButton from '../../../components/CustomButton';

const BasketScreen = () => {
  const { items, total } = useBasket();

  return (
    <SafeAreaView className='flex  h-full'>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
        renderItem={({ item }) => <BasketListItems basketItem={item} />}
        // empty state
        ListEmptyComponent={() => (
          <EmptyState title='Your Backet is Empty' subtitle='Add Items' />
        )}
      />
      {items.length === 0 && (
        <CustomButton
          title='Go Back to home'
          handlePress={() => router.back()}
          containerStyles='mx-5 mb-5'
        />
      )}

      {total !== 0 && (
        <>
          <Text className='m-4 text-2xl font-medium'>Total: R{total}</Text>
          <CustomButton
            title='Checkout'
            // handlePress={() => router.push('/home')}
            containerStyles='mx-5 mb-5'
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default BasketScreen;

const styles = StyleSheet.create({});
