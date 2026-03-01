import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../constants/Colors';
import MenuItem from './MenuItem';

export default function AboutSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>About KK Express</Text>
      <MenuItem icon="information-outline" title="App Version" badge="1.3.2" />
      <MenuItem
        icon="call-outline"
        title="Customer Care"
        badge="1800-123-4567"
        color={COLORS.primary}
      />
      <MenuItem icon="search-outline" title="Visit Search Monitoring Team" />
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