import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';
import { Redirect } from 'expo-router';

const TabsLayout = () => {
  const { isAdmin, session } = useAuth();

  if (!isAdmin) return <Redirect href='/' />;

  if (!session) return <Redirect href='/sign-in' />;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#f0fdf4',
        },
      }}
    >
      <Tabs.Screen name='index' options={{ href: null }} />
      {/* home */}
      <Tabs.Screen
        name='home'
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? 'text-secondary' : 'text-primary'
              } text-[18px]`}
            >
              Home
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name='home' size={30} color='#18B331' />
            ) : (
              <Feather name='home' size={30} color='#161622' />
            ),
        })}
      />
      {/* orders */}
      <Tabs.Screen
        name='orders'
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? 'text-secondary' : 'text-primary'
              } text-[18px]`}
            >
              Orders
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name='list' size={30} color='#18B331' />
            ) : (
              <Feather name='list' size={30} color='#161622' />
            ),
        })}
      />
      <Tabs.Screen
        name='profile'
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? 'text-secondary' : 'text-primary'
              } text-[18px]`}
            >
              Profile
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name='account-details'
                size={30}
                color='#18B331'
              />
            ) : (
              <MaterialCommunityIcons
                name='account-details'
                size={30}
                color='#161622'
              />
            ),
        })}
      />
    </Tabs>
  );
};
export default TabsLayout;
