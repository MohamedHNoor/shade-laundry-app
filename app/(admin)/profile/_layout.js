import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../../providers/AuthProvider';

export default function ProfileLayout() {
  const { session } = useAuth();
  if (!session) return <Redirect href={'/sign-in'} />;
  return (
    <>
      <Stack>
        <Stack.Screen name='index' options={{ title: 'Profile' }} />
      </Stack>
    </>
  );
}
