import { Link } from 'expo-router';
import { FlatList } from 'react-native';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
const index = () => {
  return (
    <SafeAreaView className=''>
      <FlatList
        data={[{ id: 1 }]}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <Text className='text-3xl'>{item.id}</Text>;
        }}
      />
    </SafeAreaView>
  );
};
export default index;
const styles = StyleSheet.create({});
