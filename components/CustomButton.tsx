import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Colors from '../constants/Colors';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton = ({
  title,
  onPress,
  disabled = false,
  loading = false,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Roboto-Medium',
  },
  disabled: {
    backgroundColor: '#A0A0A0',
  },
});

export default CustomButton;