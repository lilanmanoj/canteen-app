import { Tabs } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { FavouritesProvider } from '../context/FavouritesContext';

export default function RootLayout() {
  return (
    <FavouritesProvider>
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
                    headerShown: false,
                }}
            />
        </Tabs>
    </FavouritesProvider>
  );
}
