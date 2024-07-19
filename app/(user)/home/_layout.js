import { Stack, Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import Colors from '@/constants/Colors';

export default function HomeLayout() {
  return (
    <>
      <Stack
        screenOptions={{
          headerRight: () => (
            <Link href='/basket' asChild>
              <Pressable>
                {({ pressed }) => (
                  <Ionicons
                    name='basket-outline'
                    size={30}
                    color='#161622'
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      >
        <Stack.Screen name='index' options={{ title: 'Menu' }} />
      </Stack>
    </>
  );
}
