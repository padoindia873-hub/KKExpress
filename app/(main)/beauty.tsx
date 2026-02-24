import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function Beauty() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Beauty Services</Text>
      <Text style={styles.subtitle}>
        Professional salon & home beauty services for women.
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
});