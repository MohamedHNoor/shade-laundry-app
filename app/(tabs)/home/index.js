import { Link } from 'expo-router';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
const index = () => {
  return (
    <View className='flex-1 items-center justify-center h-full'>
      <Text className='text-3xl font-pblack'>Home Page</Text>
      <Link href={'/'}>welcome</Link>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({});
