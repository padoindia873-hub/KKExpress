import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';
import { CartProvider } from '../../context/CartContext';

export default function MainLayout() {
  return (
    <CartProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
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
          name="booking"
          options={{
            title: 'Bookings',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />

        {/* BEAUTY */}
        <Tabs.Screen
          name="beauty"
          options={{
            title: 'Beauty',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="sparkles-outline" size={size} color={color} />
            ),
          }}
        />

        {/* HEALTH */}
        <Tabs.Screen
          name="health"
          options={{
            title: 'Health',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="heart-outline" size={size} color={color} />
            ),
          }}
        />

        {/* EDUCATION */}
        <Tabs.Screen
          name="education"
          options={{
            title: 'Education',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="school-outline" size={size} color={color} />
            ),
          }}
        />

        {/* ACCOUNT */}
        <Tabs.Screen
          name="account"
          options={{
            title: 'Account',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />

        {/* SERVICE DETAILS (Hidden) */}
        <Tabs.Screen
          name="service/[id]"
          options={{
            href: null,
          }}
        />
      </Tabs>
    </CartProvider>
  );
}