import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/Colors';

const walletData = {
  balance: 1245.5,
  loyaltyPoints: 2450,
};

export default function WalletCard() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.sectionTitle}>Wallet & Loyalty</Text>
      <View style={styles.card}>
        <Text style={styles.balance}>₹{walletData.balance.toFixed(2)}</Text>
        <Text style={styles.label}>Available Balance</Text>

        <Text style={styles.loyalty}>
          Loyalty Points: <Text style={styles.bold}>{walletData.loyaltyPoints}</Text>
        </Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="add-circle" size={26} color={COLORS.primary} />
            <Text style={styles.actionText}>Add Money</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="receipt" size={26} color={COLORS.primary} />
            <Text style={styles.actionText}>Transactions</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginHorizontal: SPACING.md, marginVertical: SPACING.sm },
  sectionTitle: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  card: {
    backgroundColor: COLORS.primaryLight,
    borderRadius: 16,
    padding: SPACING.xl,
    alignItems: 'center',
  },
  balance: {
    fontSize: 36,
    fontWeight: '800',
    color: COLORS.primary,
  },
  label: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textSecondary,
    marginTop: SPACING.xs,
  },
  loyalty: {
    fontSize: FONT_SIZES.md,
    color: COLORS.primary,
    marginTop: SPACING.md,
  },
  bold: { fontWeight: '700' },
  actions: {
    flexDirection: 'row',
    marginTop: SPACING.xl,
    width: '100%',
    justifyContent: 'space-around',
  },
  actionBtn: { alignItems: 'center' },
  actionText: {
    marginTop: SPACING.xs,
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: FONT_SIZES.sm,
  },
});