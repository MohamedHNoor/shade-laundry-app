import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import FormField from '../../../components/FormField';
import CustomButton from '../../../components/CustomButton';

const defaultImage = 'https://i.im.ge/2024/07/21/VRy56M.upload.png';

const create = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState('');

  // reset values
  const resetFields = () => {
    setName('');
    setPrice('');
  };

  // validations
  const inputValidations = () => {
    setErrors('');
    if (!name) {
      setErrors('Name is required!');
      return false;
    }

    if (!price) {
      setErrors('Price is required!');
      return false;
    }

    if (isNaN(parseFloat(price))) {
      setErrors('Price is not a number');
      return false;
    }
    return true;
  };

  // image picker
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onCreate = () => {
    if (!inputValidations()) {
      return;
    }
    console.warn('on create product', name);
    // save in the database
    resetFields();
  };
  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <Stack.Screen options={{ title: 'Create Product' }} />
        <View className='flex-1 justify-center p-4 my-6'>
          <TouchableOpacity onPress={pickImage}>
            <Image
              source={{
                uri: image || defaultImage,
              }}
              className='w-full h-36 max-w-45 rounded-2xl'
              resizeMode='contain'
            />

            <Text className='self-center font-bold text-black-100 my-2'>
              Select Image
            </Text>
          </TouchableOpacity>
          <FormField
            placeholder='Product Name'
            value={name}
            handleChangeText={setName}
          />

          <FormField
            placeholder='Product Price (R)'
            keyboardType='numeric'
            value={price}
            handleChangeText={setPrice}
          />
          <Text className='text-red-500 px-4'>{errors}</Text>
          <CustomButton
            title='Create'
            containerStyles='w-full mt-5'
            handlePress={onCreate}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default create;
