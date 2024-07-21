import { View, Text, Pressable } from 'react-native';
import React from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
import dayjs from 'dayjs';
import { Link, useSegments } from 'expo-router';
import { TouchableOpacity } from 'react-native';

dayjs.extend(relativeTime);

const OrderListItem = ({ order }) => {
  const segments = useSegments();

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <TouchableOpacity className='bg-white px-4 py-4 rounded-lg flex-row justify-between items-center mt-4'>
        <View>
          <Text className='font-bold my-1.5'>Order #{order.id}</Text>
          <Text className='text-gray-500'>
            {dayjs(order.created_at).fromNow()}
          </Text>
        </View>

        <Text className='font-medium'>{order.status}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default OrderListItem;
