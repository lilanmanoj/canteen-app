import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RootLayout() {
  return (
    <Tabs>
        <Tabs.Screen
            name="menu"
            options={{
                title: 'Menu',
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="local-dining" color={color} />,
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name="favourites"
            options={{
                title: 'Favourites',
                tabBarIcon: ({ color }) => <MaterialIcons size={28} name="favorite" color={color} />,
            }}
        />
    </Tabs>
  );
}
