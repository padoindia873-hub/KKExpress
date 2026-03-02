import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/Colors';

export default function ReferCard() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Refer & Earn</Text>
      <TouchableOpacity style={styles.card} activeOpacity={0.85}>
        <Ionicons name="people" size={40} color={COLORS.primary} />
        <View style={styles.textContainer}>
          <Text style={styles.main}>Invite Friends, Earn ₹500 each</Text>
          <Text style={styles.sub}>Share your referral code now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { marginHorizontal: SPACING.md, marginVertical: SPACING.sm },
  title: {
    fontSize: FONT_SIZES.lg,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF5E6',
    padding: SPACING.xl,
    borderRadius: 16,
  },
  textContainer: { marginLeft: SPACING.lg, flex: 1 },
  main: { fontSize: FONT_SIZES.lg, fontWeight: '700' },
  sub: { fontSize: FONT_SIZES.sm, color: COLORS.textSecondary, marginTop: 4 },
});