import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONT_SIZES } from '../../constants/Colors';

const user = {
  name: 'Resham',
  mobile: '+91 8409199953',
  profileImage: require('../../assets/images/resham.png'),
  branch: 'Patna Central',
  location: 'Boring Road, Patna, Bihar',
};

export default function AccountHeader() {
  return (
    <View style={styles.header}>
      <Image
        source={user.profileImage}
        style={styles.photo}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.mobile}>{user.mobile}</Text>
        <Text style={styles.location}>
          {user.branch} • {user.location}
        </Text>
      </View>

      <TouchableOpacity style={styles.edit}>
        <Ionicons name="pencil" size={20} color={COLORS.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: SPACING.xl,
    margin: SPACING.md,
    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  photo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: SPACING.lg,
    borderWidth: 2,
    borderColor: COLORS.primaryLight,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: FONT_SIZES.xxl,
    fontWeight: '700',
    color: COLORS.text,
  },

  mobile: {
    fontSize: FONT_SIZES.md,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  location: {
    fontSize: FONT_SIZES.sm,
    color: COLORS.textLight,
    marginTop: 4,
  },

  edit: {
    padding: SPACING.sm,
  },
});