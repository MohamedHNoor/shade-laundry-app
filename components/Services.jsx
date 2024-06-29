import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { services } from '../assets/data';
import {} from 'react-native';
import { useState } from 'react';

const ServiceItem = ({ item }) => {
  const [select, setSelect] = useState(false);
  return (
    <TouchableOpacity
      className='bg-white p-4 rounded-2xl'
      activeOpacity={0.7}
      onPress={() => setSelect(true)}
    >
      <Image
        source={{
          uri: item.image,
        }}
        className='w-20 h-20  my-5 overflow-hidden shadow-lg shadow-black/40'
        resizeMode='cover'
      />
      <Text className='text-primary text-base font-pregular'>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default function Services() {
  return (
    <FlatList
      data={services}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ServiceItem item={item} />}
      contentContainerStyle={{ gap: 10, padding: 10 }}
    />
  );
}
