import { Stack } from 'expo-router';

export default function OrderScreen() {
  return (
    <Stack>
      <Stack.Screen name='list' options={{ headerShown: false }} />
    </Stack>
  );
}
