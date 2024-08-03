import { Stack, Link, Redirect } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth } from '../../../providers/AuthProvider';
import { ActivityIndicator } from 'react-native';

export default function HomeLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'Menu',
            headerRight: () => (
              <Link href='/(admin)/home/create' asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name='plus-square-o'
                      size={30}
                      color='#161622'
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
      </Stack>
    </>
  );
}
