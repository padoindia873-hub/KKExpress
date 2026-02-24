import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

export default function MainLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary || '#000',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 65,
          paddingBottom: 8,
          paddingTop: 6,
          borderTopWidth: 0,
          elevation: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
        headerShown: false,
      }}
    >
      {/* HOME */}
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />

      {/* BOOKINGS */}
      <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />

      {/* BEAUTY SECTION (NEW) */}
      <Tabs.Screen
        name="beauty"
        options={{
          title: 'Beauty',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="sparkles-outline" size={size} color={color} />
          ),
        }}
      />

      {/* REWARDS */}
      <Tabs.Screen
        name="rewards"
        options={{
          title: 'Rewards',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="gift-outline" size={size} color={color} />
          ),
        }}
      />

      {/* PROFILE */}
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Account',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />

      {/* HIDDEN SERVICE DETAILS PAGE */}
      <Tabs.Screen name="service/[id]" options={{ href: null }} />
    </Tabs>
  );
}