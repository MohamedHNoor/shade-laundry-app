import React, { useState } from 'react';
import { View, Text, Image, Alert, TouchableOpacity } from 'react-native';
import { Link, useSegments } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { useBasket } from '../providers/BasketProvider';

const ServiceCard = ({ item }) => {
  const { addItem, selectedService } = useBasket();

  const segments = useSegments();

  const isExcluded = segments.join('/') === '(user)/home';

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
      {!isExcluded ? (
        <Link href={`/${segments[0]}/home/${item.id}`}>
          <View className='flex-row justify-between space-x-10'>
            <Image
              source={{ uri: item.image }}
              className='w-12 h-12'
              resizeMode='contain'
            />
            <View>
              <Text className='text-primary capitalize font-psemibold w-20 mb-2'>
                {item.name}
              </Text>
              <Text className='text-base font-pregular text-secondary'>
                R {item.price}
              </Text>
            </View>
          </View>
        </Link>
      ) : (
        <View className='flex-row justify-between space-x-10'>
          <Image
            source={{ uri: item.image }}
            className='w-12 h-12'
            resizeMode='contain'
          />
          <View>
            <Text className='text-primary capitalize font-psemibold w-20 mb-2'>
              {item.name}
            </Text>
            <Text className='text-base font-pregular text-secondary'>
              R {item.price}
            </Text>
          </View>
        </View>
      )}
      <TouchableOpacity onPress={addToBasket}>
        <AntDesign name='plussquareo' size={28} color='#18B331' />
      </TouchableOpacity>
    </View>
  );
};

export default ServiceCard;
