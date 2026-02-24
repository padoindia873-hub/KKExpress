// components/ServiceCard.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';

interface Service {
  id: string;
  name: string;
  category?: string;
  // Add more fields later if needed (price, description, icon etc.)
}

interface ServiceCardProps {
  service: Service;
  onPress?: () => void;
}

export default function ServiceCard({ service, onPress }: ServiceCardProps) {
  if (!service?.name) return null;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={onPress}
      android_ripple={{ color: 'rgba(74, 108, 247, 0.1)', borderless: false }}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>
          {service.name.charAt(0).toUpperCase()}
        </Text>
      </View>

      <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
        {service.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47.5%',                // fits nicely in 2-column grid with some breathing room
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',

    // No marginHorizontal here → controlled by parent FlatList columnWrapperStyle
    marginBottom: 16,

    // Soft, clean shadow
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
      },
      android: {
        elevation: 3,
      },
    }),
  },

  iconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#F5F8FF',     // very light tint
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  iconText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#4A6CF7',               // your primary color
  },

  title: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
    letterSpacing: 0.1,
  },
});