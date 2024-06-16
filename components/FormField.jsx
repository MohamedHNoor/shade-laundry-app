import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-base text-slate-500 font-pmedium'>{title}</Text>

      <View className='w-full h-16 px-4 bg-slate-100 rounded-2xl border-2 border-slate-200 focus:border-secondary flex flex-row items-center'>
        <TextInput
          className='flex-1 text-slate-500 font-psemibold text-base'
          value={value}
          placeholder={placeholder}
          placeholderTextColor='#94a3b8'
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props}
        />
        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <View>
              {!showPassword ? (
                <Feather name='eye-off' size={20} color='#64748b' />
              ) : (
                <Feather name='eye' size={20} color='#64748b' />
              )}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default FormField;
