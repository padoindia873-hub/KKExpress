import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { services } from '../../../constants/servicesData';
import CustomButton from '../../../components/CustomButton';
import { COLORS } from '../../../constants/Colors';

export default function ServiceDetail() {
  const { id } = useLocalSearchParams();
  const service = services.find((s) => s.id === id);

  if (!service) return <Text>Service not found</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{service.name}</Text>
      <Text style={styles.desc}>{service.description}</Text>
      <Text style={styles.price}>₹{service.price}</Text>
      <CustomButton title="Book Now" onPress={() => alert('Booked!')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.background,
  },
  title: {
    fontFamily: 'Roboto-Bold',
    fontSize: 24,
    color: COLORS.text,
  },
  desc: {
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
    marginVertical: 10,
    color: COLORS.textSecondary,
  },
  price: {
    fontFamily: 'Roboto-Medium',
    fontSize: 18,
    color: COLORS.primary,
  },
});