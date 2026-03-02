import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../constants/Colors';
import MenuItem from './MenuItem';

export default function SafetyFeaturesSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Safety Features</Text>
      <MenuItem icon="shield-checkmark-outline" title="KK Safety Promise" />
      <MenuItem icon="call-outline" title="Emergency Contact" />
      <MenuItem icon="alert-circle-outline" title="Report Fraud" />
      <MenuItem icon="checkmark-circle-outline" title="Verified Service Provider Info" />
      <MenuItem icon="information-outline" title="Safety Guidelines" />
      <MenuItem icon="cash-outline" title="Compensation Claim" />
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