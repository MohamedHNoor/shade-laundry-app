import { View, Text, ScrollView, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, router } from 'expo-router';
import { useState } from 'react';

import { supabase } from '../../lib/supabase';

import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';

const signIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    const { email, password } = form;

    if (!email || !password) {
      Alert.alert('Please provide both email and password');
      return;
    }
    setIsSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) {
        Alert.alert('Error', error.message);
        return;
      }
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <View className='w-full justify-center items-center h-full px-4 my-6'>
          <Image
            source={require('../../assets/images/logo.png')}
            className='w-[150px] h-[150px]'
            resizeMethod='contain'
          />
          <Text className='text-2xl text-primary text-semibold font-psemibold text-center mt-5'>
            Login
          </Text>
          {/* email */}
          <FormField
            title='Email'
            value={form.email}
            placeholder='example@gmail.com'
            keyboardType='email-address'
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
          />
          {/* password */}
          <FormField
            title='Password'
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            placeholder='Password'
            otherStyles='mt-7'
          />

          {/* submit button */}
          <CustomButton
            title='Sign In'
            containerStyles='w-full mt-7'
            handlePress={submit}
            isLoading={isSubmitting}
          />

          {/* dont have an account */}
          <View className='flex justify-center pt-5 flex-row gap-2'>
            <Text className='text-lg text-slate-500 font-pregular'>
              Dont't have an account?
            </Text>
            <Link
              href='/sign-up'
              className='text-lg font-psemibold text-secondary'
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default signIn;
