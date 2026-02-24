import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Rewards() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>
        <Ionicons name="gift" size={60} color="#6C5CE7" />
        <Text style={styles.title}>Refer & Earn ₹100</Text>
        <Text style={styles.subtitle}>
          Invite your friends and earn ₹100 when they complete their first booking.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Refer Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.pointsCard}>
        <Text style={styles.pointsTitle}>Your Reward Points</Text>
        <Text style={styles.pointsValue}>₹0</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginTop: 15,
  },

  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginTop: 8,
  },

  button: {
    marginTop: 20,
    backgroundColor: '#6C5CE7',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },

  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },

  pointsCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
  },

  pointsTitle: {
    fontSize: 14,
    color: '#666',
  },

  pointsValue: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 6,
  },
});