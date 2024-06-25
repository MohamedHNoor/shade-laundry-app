import { Tabs } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';
import { Redirect } from 'expo-router';

const TabsLayout = () => {
  const { session, loading } = useAuth();

  if (!loading && !session) return <Redirect href='/(auth)/sign-in' />;

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#161622',
        },
      }}
    >
      <Tabs.Screen
        name='home'
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? 'text-secondary-200' : 'text-white'
              } text-[16px]`}
            >
              Home
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name='home' size={24} color='#4ade80' />
            ) : (
              <Feather name='home' size={24} color='white' />
            ),
        })}
      />
      <Tabs.Screen
        name='basket'
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? 'text-secondary-200' : 'text-white'
              } text-[16px]`}
            >
              Basket
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Ionicons name='basket' size={24} color='#4ade80' />
            ) : (
              <Ionicons name='basket' size={24} color='white' />
            ),
        })}
      />
      <Tabs.Screen
        name='profile'
        options={({ route }) => ({
          tabBarLabel: ({ focused }) => (
            <Text
              className={`${
                focused ? 'text-secondary-200' : 'text-white'
              } text-[16px]`}
            >
              Profile
            </Text>
          ),
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name='account-details'
                size={24}
                color='#4ade80'
              />
            ) : (
              <MaterialCommunityIcons
                name='account-details'
                size={24}
                color='white'
              />
            ),
        })}
      />
    </Tabs>
  );
};
export default TabsLayout;
