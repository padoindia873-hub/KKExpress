// app/(onboarding)/location.tsx
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import Colors from '../../constants/Colors';

export default function LocationScreen() {
  const { saveLocation } = useAuth();
  const router = useRouter();

  const handleCurrent = () => {
    saveLocation({ type: 'current', lat: 25.5941, long: 85.1376 }); // Patna coords mock
    router.replace('/(main)/home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where do you want your service?</Text>
      <Button title="At my current location" onPress={handleCurrent} color={Colors.primary} />
      <Text style={styles.or}>OR</Text>
      <Button title="Enter location manually" onPress={() => alert('Manual coming soon')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 40, backgroundColor: '#fff' },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 40, color: Colors.text },
  or: { marginVertical: 20, fontSize: 16, color: '#777' },
});