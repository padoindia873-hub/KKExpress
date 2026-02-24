import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

export default function CustomInput(props: TextInputProps) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor="#999"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: '#fff',
    marginVertical: 6,
  },
});