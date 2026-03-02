import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../constants/Colors';
import MenuItem from './MenuItem';

export default function BookingsRatingsSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Bookings & Ratings</Text>
      <MenuItem icon="calendar-outline" title="My Bookings" />
      <MenuItem icon="star-outline" title="Service Provider Rating" />
      <MenuItem icon="alert-circle-outline" title="Complaint on Service" />
      <MenuItem icon="people-outline" title="Refer KK Express" />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: COLORS.card,
    marginHorizontal: SPACING.md,
    marginVertical: SPACING.sm,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    paddingHorizontal: SPACING.lg,
    paddingTop: SPACING.lg,
    paddingBottom: SPACING.sm,
  },
});