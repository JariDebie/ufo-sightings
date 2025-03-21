import { Tabs } from 'expo-router';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'Sightings List',
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}
