import { Link, Redirect, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../components/CustomButton';
import { ActivityIndicator } from 'react-native';
import { useAuth } from '../providers/AuthProvider';

const index = () => {
  const { session, loading } = useAuth();

  if (!loading && session) return <Redirect href='/home' />;

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full justify-center items-center h-full px-4'>
          <Image
            source={require('../assets/images/logo.png')}
            className='w-full h-[300px] max-w-[380px]'
            resizeMode='contain'
          />

          <View className=' mt-5'>
            <Text className='text-3xl text-primary font-bold text-center'>
              Discover Endless {'\n'} Possibilities with{' '}
              <Text className='text-secondary-200'>The Shade Laundry</Text>
            </Text>
          </View>
          {/* text */}
          <Text className='text-sm font-pregular text-slate-400 mt-7 text-center'>
            Where Cleanliness Meets Innovation: Embark on a Journey of
            Impeccable Service with The Shade Laundry.
          </Text>

          {/* button */}
          <Link href={'/(user)'} asChild>
            <CustomButton title='User' containerStyles='w-full mt-7' />
          </Link>
          <Link href={'/sign-in'} asChild>
            <CustomButton title='Admin' containerStyles='w-full mt-7' />
          </Link>
        </View>
      </ScrollView>
      <StatusBar style='auto' backgroundColor='auto' />
    </SafeAreaView>
  );
};
export default index;

const styles = StyleSheet.create({});
