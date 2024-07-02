import React from 'react';
import { Stack, router } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

const BasketLayout = () => {
  // const navigation = useNavigation();

  return (
    <Stack>
      <Stack.Screen
        name='index'
        options={{
          title: 'Basket',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.navigate('/home')}
              // style={{ marginLeft: 10 }}
              className='flex-row items-center gap-2'
            >
              {/* <Ionicons name='arrow-back' size={30} color='#4ade80' /> */}
              {/* <Entypo name='chevron-medium-left' size={40} color='#3b82f6' /> */}
              <FontAwesome6 name='chevron-left' size={24} color='#3b82f6' />
              <Text className='text-blue-500 text-lg font-pmedium ml-0'>
                {' '}
                Home{' '}
              </Text>
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
    </Stack>
  );
};

export default BasketLayout;
