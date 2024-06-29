import { router } from 'expo-router';
import { View, Text, Image } from 'react-native';

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className='flex justify-center items-center px-4'>
      <Image
        source={require('../assets/images/empty.png')}
        resizeMode='contain'
        className='w-[270px] h-[216px]'
      />

      <Text className='text-sm font-pmedium text-gray-500'>{title}</Text>
      <Text className='text-xl text-center font-psemibold text-primary mt-2'>
        {subtitle}
      </Text>
    </View>
  );
};

export default EmptyState;
