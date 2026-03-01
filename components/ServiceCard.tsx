import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Helper function to pick the right icon based on service name/category
const getServiceIcon = (name: string, category?: string): string => {
  const lowerName = name.toLowerCase();
  const lowerCat = (category || '').toLowerCase();

  // Appliance Repair / Electronics / Home Appliances
  if (
    lowerName.includes('repair') ||
    lowerName.includes('fix') ||
    lowerName.includes('fridge') ||
    lowerName.includes('ac') ||
    lowerName.includes('washing') ||
    lowerName.includes('tv') ||
    lowerName.includes('appliance') ||
    lowerName.includes('microwave')
  ) {
    return 'hammer-outline';
  }

  // Beauty & Salon
  if (
    lowerCat.includes('beauty') ||
    lowerName.includes('salon') ||
    lowerName.includes('hair') ||
    lowerName.includes('makeup') ||
    lowerName.includes('spa') ||
    lowerName.includes('facial') ||
    lowerName.includes('manicure') ||
    lowerName.includes('pedicure')
  ) {
    return 'cut-outline';
  }

  // Cleaning Services
  if (
    lowerName.includes('clean') ||
    lowerName.includes('housekeeping') ||
    lowerName.includes('maid') ||
    lowerName.includes('deep clean') ||
    lowerName.includes('sanitization')
  ) {
    return 'sparkles-outline';
  }

  // Plumbing
  if (
    lowerName.includes('plumb') ||
    lowerName.includes('pipe') ||
    lowerName.includes('leak') ||
    lowerName.includes('tap') ||
    lowerName.includes('bathroom') ||
    lowerName.includes('toilet')
  ) {
    return 'water-outline';
  }

  // Electrician / Electrical
  if (
    lowerName.includes('electric') ||
    lowerName.includes('wiring') ||
    lowerName.includes('switch') ||
    lowerName.includes('fan') ||
    lowerName.includes('light') ||
    lowerName.includes('socket')
  ) {
    return 'flash-outline';
  }

  // Painting / Interior
  if (
    lowerName.includes('paint') ||
    lowerName.includes('color') ||
    lowerName.includes('wall') ||
    lowerName.includes('interior') ||
    lowerName.includes('exterior')
  ) {
    return 'brush-outline';
  }

  // Health / Wellness / Medical
  if (
    lowerName.includes('health') ||
    lowerName.includes('doctor') ||
    lowerName.includes('checkup') ||
    lowerName.includes('physio') ||
    lowerName.includes('massage')
  ) {
    return 'heart-outline';
  }

  // Education / Tuition / Learning
  if (
    lowerName.includes('education') ||
    lowerName.includes('tuition') ||
    lowerName.includes('class') ||
    lowerName.includes('course') ||
    lowerName.includes('teacher') ||
    lowerName.includes('coaching')
  ) {
    return 'school-outline';
  }

  // Pest Control
  if (lowerName.includes('pest') || lowerName.includes('cockroach') || lowerName.includes('rat')) {
    return 'bug-outline';
  }

  // Gardening / Plant Care
  if (lowerName.includes('garden') || lowerName.includes('plant') || lowerName.includes('lawn')) {
    return 'leaf-outline';
  }

  // Generic / Others (fallback)
  return 'construct-outline';
};

interface Service {
  id: string;
  name: string;
  category?: string;
}

interface ServiceCardProps {
  service: Service;
  onPress?: () => void;
}

export default function ServiceCard({ service, onPress }: ServiceCardProps) {
  if (!service?.name) return null;

  const iconName = getServiceIcon(service.name, service.category);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={32} color="#4A6CF7" />
      </View>

      <Text style={styles.title} numberOfLines={2}>
        {service.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '47.5%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginBottom: 16,

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

  cardPressed: {
    opacity: 0.7,
  },

  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F5F8FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  title: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: '700',
    color: '#1F2937',
    textAlign: 'center',
  },
});