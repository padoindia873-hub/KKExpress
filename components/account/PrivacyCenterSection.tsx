import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../constants/Colors';
import MenuItem from './MenuItem';

export default function PrivacyCenterSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Privacy Center</Text>
      <MenuItem icon="finger-print-outline" title="Account Control" />
      <MenuItem icon="lock-closed-outline" title="Data Privacy" />
      <MenuItem icon="shield-checkmark-outline" title="Booking & Service Safety" />
      <MenuItem icon="chatbubble-ellipses-outline" title="Communication Control" />
      <MenuItem icon="help-circle-outline" title="Legal Support" />
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