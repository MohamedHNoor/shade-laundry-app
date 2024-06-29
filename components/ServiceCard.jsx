import { View, Text, Image, Pressable, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Redirect } from 'expo-router';

const ServiceCard = ({ item }) => {
  return (
    <View className='flex flex-row items-center px-4 py-4 mb-5 justify-between bg-white rounded-lg'>
      {/* image */}

      <View>
        <Image
          source={{ uri: item.image }}
          className='w-12 h-12'
          resizeMode='contain'
        />
      </View>
      {/* items */}
      <View>
        <Text className='text-primary capitalize font-pregular w-20 mb-2'>
          {item.name}
        </Text>
        <Text className='text-base text-gray-500'>R {item.price}</Text>
      </View>

      {/* Add button */}
      <TouchableOpacity>
        <AntDesign name='plussquareo' size={28} color='#18B331' />
      </TouchableOpacity>
    </View>
  );
};
export default ServiceCard;
