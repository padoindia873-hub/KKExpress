import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../constants/Colors';
import MenuItem from './MenuItem';

export default function PaymentMethodsSection() {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Payment Methods</Text>
      <MenuItem icon="qr-code-outline" title="Saved UPI" />
      <MenuItem icon="card-outline" title="Saved Cards" />
      <MenuItem icon="globe-outline" title="Net Banking" />
      <MenuItem icon="repeat-outline" title="Autopay" />
      <MenuItem icon="wallet-outline" title="Wallet Usage" />
      <MenuItem icon="card" title="KK Membership Card Use" />
      <MenuItem icon="qr-code-outline" title="QR Scanner" />
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