import { colors } from '@/styles/global';
import { Home, List, PlusCircle } from 'lucide-react-native';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.surface,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => <Home size={size}  color={color}/>
        }}
      />
      <Tabs.Screen
        name='add-meal' 
        options={{
          title: 'Add Meal',
          tabBarIcon: ({ color, size }) => <PlusCircle size={size} color={color} />
        }}
      />
      <Tabs.Screen
        name='meals'
        options={{
          title: 'All Meals',
          tabBarIcon: ({ color, size }) => <List size={size} color={color} />
        }}
      />
    </Tabs>
  );
}
