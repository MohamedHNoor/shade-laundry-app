import { StyleSheet, Text, View } from 'react-native';
import CustomButton from '../../../components/CustomButton';
import { supabase } from '../../../lib/supabase';

const index = () => {
  return (
    <View>
      {/* signout button */}
      <CustomButton
        title='Signout'
        handlePress={() => supabase.auth.signOut()}
        containerStyles='w-full mt-7'
      />
    </View>
  );
};
export default index;
