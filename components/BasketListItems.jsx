import React from 'react';
import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useBasket } from '../providers/BasketProvider';

const BasketListItems = ({ basketItem }) => {
  const { updateQuantity } = useBasket();
  if (!basketItem || !basketItem.product) return null;

  return (
    <View className='flex flex-row items-center justify-center mb-3 bg-white mx-3 rounded-lg px-3 py-2'>
      <Image
        source={{ uri: basketItem.product.image }}
        className='w-16 h-16'
        resizeMode='contain'
      />
      <View className='flex-1 ml-3'>
        <Text className='text-lg font-medium mb-1'>
          {basketItem.product.name}
        </Text>
        <View className='flex space-y-2 justify-center'>
          <Text className='text-slate-500 font-pregular'>
            R{basketItem.product.price.toFixed(2)}
          </Text>
          <Text className='text-secondary font-psemibold'>
            {basketItem.service}
          </Text>
        </View>
      </View>
      <View className='flex flex-row items-center space-x-3'>
        <TouchableOpacity
          onPress={() => updateQuantity(basketItem.id, -1)}
          className='rounded-full bg-slate-100 p-2'
        >
          <AntDesign name='minus' size={20} color='#18B331' />
        </TouchableOpacity>
        <Text className='text-lg font-psemibold'>{basketItem.quantity}</Text>
        <TouchableOpacity
          onPress={() => updateQuantity(basketItem.id, 1)}
          className='rounded-full bg-slate-100 p-2'
        >
          <AntDesign name='plus' size={20} color='#18B331' />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BasketListItems;
