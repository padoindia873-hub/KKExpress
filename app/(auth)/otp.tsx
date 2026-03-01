import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { COLORS } from '../../constants/Colors';

export default function Otp() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const { verifyOtp, mobile } = useAuth();
  const router = useRouter();

  // 🔥 If no mobile, go back to login
  useEffect(() => {
    if (!mobile) {
      router.replace('/(auth)/login');
    }
  }, [mobile]);

  const handleVerify = () => {
    setError('');

    if (otp !== '1234') {
      setError('Wrong OTP – Use 1234 for testing');
      return;
    }

    verifyOtp();
    router.replace('/(onboarding)/location');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Verify OTP</Text>

        <Text style={styles.subtitle}>
          OTP sent to +91 {mobile}
        </Text>

        <TextInput
          value={otp}
          onChangeText={setOtp}
          keyboardType="number-pad"
          maxLength={4}
          style={styles.input}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Verify OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 30, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { textAlign: 'center', marginVertical: 20, color: '#666' },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 18,
    borderRadius: 12,
    textAlign: 'center',
    fontSize: 22,
    letterSpacing: 8,
    marginBottom: 15,
  },
  error: { color: 'red', textAlign: 'center', marginBottom: 10 },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});