import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Menu',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="[itemId]"
        options={{
          title: 'Food Details',
          headerShown: true,
        }}
      />
    </Stack>
  );
}