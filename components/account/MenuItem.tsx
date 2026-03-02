import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';

type Props = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onPress?: () => void;
  color?: string;
};

export default function MenuItem({
  icon,
  title,
  onPress,
  color = COLORS.text,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.left}>
        <Ionicons name={icon} size={22} color={color} />
        <Text style={[styles.title, { color }]}>{title}</Text>
      </View>

      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.border || '#eee',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  title: {
    fontSize: 16,
    marginLeft: 16,
    fontWeight: '500',
  },
});