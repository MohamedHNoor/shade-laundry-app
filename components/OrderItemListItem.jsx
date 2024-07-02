import React from 'react';
import { View, Text, Image } from 'react-native';
// import { defaultPizzaImage } from './ProductListItem';

const OrderItemListItem = ({ item }) => {
  return (
    <View className='bg-white rounded-lg p-1.5 flex-1 flex-row items-center'>
      <Image
        source={{ uri: item.products.image || '' }}
        className='w-20 aspect-square self-center mr-2.5'
        resizeMode='contain'
      />
      <View className='flex-1'>
        <Text className='font-psemibold text-lg mb-1.5 text-primary'>
          {item.products.name}
        </Text>
        <View className='flex-row gap-2 items-center '>
          <Text className=' font-pmedium'>
            ${item.products.price.toFixed(2)}
          </Text>
          <Text className='text-md font-pmedium text-md text-slate-500'>
            {item.service}
          </Text>
        </View>
      </View>
      <View className='flex-row gap-2.5 items-center my-2.5 font-psemibold'>
        <Text className='font-medium text-xl'>{item.quantity}</Text>
      </View>
    </View>
  );
};

export default OrderItemListItem;
