import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Stack, useLocalSearchParams } from 'expo-router';
import { orders } from '../../../assets/data/orders';
import OrderItemListItem from '../../../components/OrderItemListItem';
import OrderListItem from '../../../components/OrderListItem';

const OrderStatusList = ['New', 'Processing', 'Delivered'];

const OrderDetailScreen = () => {
  const { id } = useLocalSearchParams();

  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <Text>Order not found!</Text>;
  }

  return (
    <View className='p-4 flex-1 gap-4'>
      <Stack.Screen options={{ title: `Order #${order.id}` }} />
      <View>
        <OrderListItem order={order} />
      </View>

      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem item={item} />}
        contentContainerStyle={{ gap: 10 }}
        ListFooterComponent={
          <>
            <Text className='font-pbold'>Status</Text>
            <View className='flex-row space-x-3'>
              {OrderStatusList.map((status) => (
                <TouchableOpacity
                  key={status}
                  onPress={() => console.warn('Update status')}
                  className={`border ${
                    order.status === status ? 'bg-secondary' : 'bg-transparent '
                  }  border-secondary py-2 px-4 rounded-md my-3`}
                >
                  <Text
                    className={`${
                      order.status === status ? 'text-white' : 'text-primary'
                    } font-psemibold`}
                  >
                    {status}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        }
      />
    </View>
  );
};

export default OrderDetailScreen;
