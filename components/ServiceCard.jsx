import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useBasket } from '../providers/BasketProvider';

const ServiceCard = ({ item }) => {
  const { addItem, selectedService } = useBasket();

  const addToBasket = () => {
    if (!item) return;

    if (!selectedService) {
      Alert.alert('Please select a service');
      return;
    }
    addItem(item, selectedService);
  };

  return (
    <View
      className={`flex flex-row items-center px-4 py-4 mb-5 mx-4 justify-between bg-white rounded-lg`}
    >
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
      <TouchableOpacity onPress={addToBasket}>
        <AntDesign name='plussquareo' size={28} color='#18B331' />
      </TouchableOpacity>
    </View>
  );
};

export default ServiceCard;
