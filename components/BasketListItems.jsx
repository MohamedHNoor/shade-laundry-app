import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useBasket } from '../providers/BasketProvider';

const BasketListItems = ({ basketItem }) => {
  const { updateQuantity } = useBasket();
  if (!basketItem || !basketItem.product) return null;

  return (
    <View className='bg-white rounded-md p-3 mx-3 flex flex-row items-center mb-3'>
      <Image
        source={{ uri: basketItem.product.image }}
        className='w-16 h-16'
        resizeMode='contain'
      />
      <View className='flex-1 ml-3'>
        <Text className='text-lg font-medium mb-1'>
          {basketItem.product.name}
        </Text>
        <View className='flex flex-row space-x-2'>
          <Text className='text-primary font-bold'>
            ${basketItem.product.price.toFixed(2)}
          </Text>
          <Text>Service: {basketItem.service}</Text>
        </View>
      </View>
      <View className='flex flex-row items-center space-x-3 ml-3'>
        <Pressable onPress={() => updateQuantity(basketItem.id, -1)}>
          <AntDesign name='minus' size={18} color='#18B331' className='p-1' />
        </Pressable>
        <Text className='text-lg font-medium'>{basketItem.quantity}</Text>
        <Pressable onPress={() => updateQuantity(basketItem.id, 1)}>
          <AntDesign name='plus' size={18} color='#18B331' className='p-1' />
        </Pressable>
      </View>
    </View>
  );
};

export default BasketListItems;
