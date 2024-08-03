import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import FormField from '../../../components/FormField';
import CustomButton from '../../../components/CustomButton';
import {
  useInsertProduct,
  useUpdateProduct,
  useProduct,
  useDeleteProduct,
} from '../../../api/products';

const defaultImage = 'https://i.im.ge/2024/07/21/VRy56M.upload.png';

const create = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);

  const { id: idString } = useLocalSearchParams();
  const id = parseFloat(
    typeof idString === 'string' ? idString : idString?.[0]
  );

  const isUpdating = !!idString;

  const { mutate: insertProduct } = useInsertProduct();
  const { mutate: updateProduct } = useUpdateProduct();
  const { data: updatingProduct } = useProduct(id);
  const { mutate: deleteProduct } = useDeleteProduct();

  const router = useRouter();

  useEffect(() => {
    if (updatingProduct) {
      setName(updatingProduct.name);
      setPrice(updatingProduct.price.toString());
      setImage(updatingProduct.image);
    }
  }, [updatingProduct]);

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

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  // create product
  const onCreate = () => {
    if (!inputValidations()) {
      return;
    }

    setLoading(true);
    // save in the database
    insertProduct(
      {
        name,
        price: parseFloat(price),
        image,
      },
      {
        onSuccess: () => {
          resetFields();
          router.back();
        },
        onError: () => {
          setLoading(false);
        },
      }
    );
  };

  // update product
  const onUpdate = () => {
    if (!inputValidations()) {
      return;
    }

    setLoading(true);
    // save in the database
    updateProduct(
      {
        id,
        name,
        price: parseFloat(price),
        image,
      },
      {
        onSuccess: () => {
          resetFields();
          router.back();
        },
        onError: () => {
          setLoading(false);
        },
      }
    );
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
    setLoading(true);
    deleteProduct(id, {
      onSuccess: () => {
        resetFields();
        router.replace('/(admin)');
      },
      onError: () => {
        setLoading(false);
      },
    });
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
            isLoading={loading}
            handlePress={onSubmit}
          />
          {isUpdating && (
            <CustomButton
              containerStyles='bg-transparent border border-red-500'
              textStyles='text-red-500'
              isLoading={loading}
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
