import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { COLORS } from '../../constants/Colors';

export default function Login() {
  const [mobile, setMobile] = useState('');
  const { login } = useAuth();
  const router = useRouter();

  const handleSendOtp = () => {
    if (mobile.length !== 10) {
      Alert.alert('Invalid Number', 'Mobile number 10 digits ka hona chahiye');
      return;
    }

    login(mobile); // save mobile
    router.push('/(auth)/otp'); // go to OTP
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to KK Express</Text>
        <Text style={styles.subtitle}>
          Enter your phone number to get started
        </Text>

        <TextInput
          value={mobile}
          onChangeText={setMobile}
          placeholder="Enter 10 digit mobile"
          keyboardType="number-pad"
          maxLength={10}
          style={styles.input}
        />

        <TouchableOpacity
          style={[
            styles.button,
            { opacity: mobile.length === 10 ? 1 : 0.5 },
          ]}
          disabled={mobile.length !== 10}
          onPress={handleSendOtp}
        >
          <Text style={styles.buttonText}>Send OTP</Text>
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
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});