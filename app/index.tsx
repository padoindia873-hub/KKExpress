// app/index.tsx
import { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../context/AuthContext';
import { COLORS } from '../constants/Colors';

export default function Index() {
  const { isLoggedIn, location } = useAuth();
  const router = useRouter();

  useEffect(() => {
    console.log('[Splash] Checking auth:', { isLoggedIn, hasLocation: !!location });

   
    const timer = setTimeout(() => {
      if (isLoggedIn && location) {
        console.log('[Splash] → Redirecting to HOME');
        router.replace('/(main)/home');
      } else if (isLoggedIn) {
        console.log('[Splash] → Redirecting to LOCATION');
        router.replace('/(onboarding)/location');
      } else {
        console.log('[Splash] → Redirecting to LOGIN');
        router.replace('/(auth)/login');
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [isLoggedIn, location, router]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KK City Service</Text>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
});