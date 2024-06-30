import { StyleSheet, Text, View } from 'react-native';
import { useBasket } from '../../../providers/BasketProvider';

const index = () => {
  const { items } = useBasket();
  return (
    <View>
      <Text>Basket items length: {items.length}</Text>
    </View>
  );
};
export default index;
const styles = StyleSheet.create({});
