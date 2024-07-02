import { Stack } from 'expo-router';

export default function OrderScreen() {
  return (
    <Stack>
      <Stack.Screen name='index' options={{ title: 'Orders' }} />
    </Stack>
  );
}
