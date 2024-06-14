import { View, Text, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';

const SignUp = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <View className='w-full justify-center items-center h-full px-4 my-6'>
          <Image
            source={require('../../assets/images/logo.png')}
            className='w-[150px] h-[150px]'
            resizeMethod='contain'
          />
          <Text className='text-2xl text-white text-semibold font-psemibold text-center mt-5'>
            Register
          </Text>
          {/* username */}
          <FormField
            title='Username'
            placeholder='JohnDoe'
            otherStyles='mt-7'
          />

          {/* email */}
          <FormField
            title='Email'
            placeholder='example@gmail.com'
            keyboardType='email-address'
            otherStyles='mt-7'
          />
          {/* password */}
          <FormField
            title='Password'
            placeholder='Password'
            otherStyles='mt-7'
          />

          {/* submit button */}
          <CustomButton title='Sign Up' containerStyles='w-full mt-7' />

          {/* dont have an account */}
          <View className='flex justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-slate-500 font-pregular'>
              Have an account already?
            </Text>
            <Link
              href='/sign-in'
              className='text-lg font-psemibold text-secondary'
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
