import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import FormField from '../../../components/FormField';
import CustomButton from '../../../components/CustomButton';

const defaultImage = 'https://i.im.ge/2024/07/21/VRy56M.upload.png';

const create = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState('');

  const { id } = useLocalSearchParams();
  const isUpdating = !!id;

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

  // create product
  const onCreate = () => {
    if (!inputValidations()) {
      return;
    }
    console.warn('on create product', name);
    // save in the database
    resetFields();
  };

  // update product
  const onUpdate = () => {
    if (!inputValidations()) {
      return;
    }
    console.warn('Updating product', name);
    // save in the database
    resetFields();
  };

  const onSubmit = () => {
    if (isUpdating) {
      // update function
      onUpdate();
    } else {
      // create function
      onCreate();
    }
  };

  // delete product
  const onDelete = () => {
    console.warn('DELETE!!!');
  };
  const confirmDelete = () => {
    Alert.alert('Confirm', 'Are you sure you want to delete this product?', [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: onDelete,
      },
    ]);
  };

  return (
    <SafeAreaView className='bg-white h-full'>
      <ScrollView>
        <Stack.Screen
          options={{ title: isUpdating ? 'Update Product' : 'Create Product' }}
        />
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
            title={isUpdating ? 'Update' : 'Create'}
            containerStyles='w-full mt-5 mb-3'
            handlePress={onSubmit}
          />
          {isUpdating && (
            <CustomButton
              containerStyles='bg-transparent border border-red-500'
              textStyles='text-red-500'
              handlePress={confirmDelete}
              title='Delete'
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default create;
