import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { services } from '../assets/data';
import { useState, useCallback } from 'react';

const ServiceItem = ({ item, selectedService, onPress }) => {
  const isSelected = selectedService?.id === item.id;

  return (
    <TouchableOpacity
      className={`${
        isSelected ? 'border border-primary' : ''
      } bg-white p-2 rounded-2xl flex justify-center items-center`}
      activeOpacity={0.7}
      onPress={() => onPress(item)}
    >
      <Image
        source={{
          uri: item.image,
        }}
        className='w-20 h-20 my-5 overflow-hidden shadow-lg shadow-black/40'
        resizeMode='contain'
      />
      <Text className='text-primary text-center text-base font-pregular'>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const handlePress = useCallback(
    (item) => {
      setSelectedService((prev) => (prev?.id === item.id ? null : item));
    },
    [setSelectedService]
  );

  return (
    <FlatList
      data={services}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ServiceItem
          item={item}
          selectedService={selectedService}
          onPress={handlePress}
        />
      )}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}