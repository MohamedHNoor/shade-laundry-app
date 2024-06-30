import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useBasket } from '../providers/BasketProvider';

const ServiceCard = ({ item }) => {
  const { items, selectedService, addItem } = useBasket();

  const addToBasket = () => {
    if (selectedService) {
      addItem(item, selectedService);
    }
  };

  const isInBasket = items.some((c) => c.id === item.id);

  return (
    <View className='flex flex-row items-center px-4 py-4 mb-5 justify-between bg-white rounded-lg'>
      <Image
        source={{ uri: item.image }}
        className='w-12 h-12'
        resizeMode='contain'
      />
      <View>
        <Text className='text-primary capitalize font-pregular w-20 mb-2'>
          {item.name}
        </Text>
        <Text className='text-base text-gray-500'>R {item.price}</Text>
      </View>
      {isInBasket ? (
        <View className='flex flex-row gap-3 items-center'>
          <Pressable
            onPress={() => {}}
            className='bg-slate-100 rounded-full p-2'
          >
            <AntDesign name='minus' size={18} color='#18B331' />
          </Pressable>
          <Text>1</Text>
          <Pressable
            onPress={() => {}}
            className='bg-slate-100 rounded-full p-2'
          >
            <AntDesign name='plus' size={18} color='#18B331' />
          </Pressable>
        </View>
      ) : (
        <Pressable onPress={addToBasket}>
          <AntDesign name='plussquareo' size={28} color='#18B331' />
        </Pressable>
      )}
    </View>
  );
};

export default ServiceCard;
