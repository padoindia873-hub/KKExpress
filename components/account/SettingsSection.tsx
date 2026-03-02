import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS, SPACING } from '../../constants/Colors';
import MenuItem from './MenuItem';

type Props = {
  notifications: boolean;
  setNotifications: (val: boolean) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  logout: () => void;
};

export default function SettingsSection({
  notifications,
  setNotifications,
  darkMode,
  setDarkMode,
  logout,
}: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.title}>Settings</Text>
      <MenuItem icon="person-outline" title="Profile Edit" />
      <MenuItem icon="card-outline" title="Add Membership Card Number" />
      <MenuItem icon="lock-closed-outline" title="Change Password" />
      <MenuItem icon="shield-checkmark-outline" title="Two Factor Authentication" />
      <MenuItem
        icon="notifications-outline"
        title="Notification Settings"
        // onPress={() => setNotifications(!notifications)} // toggle example
      />
      <MenuItem icon="language-outline" title="Language" />
      <MenuItem
        icon="moon-outline"
        title="Dark Mode"
        // onPress={() => setDarkMode(!darkMode)}
      />
      <MenuItem
        icon="trash-outline"
        title="Delete Account"
        color={COLORS.danger}
        onPress={logout}
      />
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