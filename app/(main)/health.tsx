import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  RefreshControl,
  TextInput,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';

// Dummy data (real mein API se replace kar dena)
const quickActions = [
  { id: '1', title: 'Doctor Consult', icon: 'medkit-outline', color: '#4CAF50' },
  { id: '2', title: 'Lab Tests', icon: 'flask-outline', color: '#2196F3' },
  { id: '3', title: 'Medicines', icon: 'pill', color: '#FF9800' },
  { id: '4', title: 'Health Checkup', icon: 'heart-outline', color: '#E91E63' },
];

const upcomingAppointments = [
  {
    id: '1',
    doctor: 'Dr. Anjali Sharma',
    speciality: 'General Physician',
    date: 'Tomorrow, 10:30 AM',
    type: 'Video Consult',
    status: 'Confirmed',
  },
  {
    id: '2',
    doctor: 'Dr. Rajesh Kumar',
    speciality: 'Cardiologist',
    date: '25 Feb 2026, 4:00 PM',
    type: 'In-Clinic',
    status: 'Pending Payment',
  },
];

const popularDoctors = [
  { id: '1', name: 'Dr. Priya Singh', speciality: 'Gynecologist', rating: 4.9, fees: 799, distance: '1.8 km' },
  { id: '2', name: 'Dr. Amit Verma', speciality: 'Dermatologist', rating: 4.8, fees: 699, distance: '2.1 km' },
  { id: '3', name: 'Dr. Neha Kapoor', speciality: 'Pediatrician', rating: 4.7, fees: 599, distance: '0.9 km' },
];

export default function HealthScreen() {
  const [search, setSearch] = useState('');
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate API refresh
    setTimeout(() => setRefreshing(false), 1500);
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* Fixed Top Search Bar */}
      <View style={styles.topSearch}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search doctors, tests, medicines..."
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }
      >
        {/* Hero Banner */}
        <View style={styles.hero}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800' }}
            style={styles.heroImage}
          />
          <View style={styles.heroOverlay}>
            <Text style={styles.heroTitle}>Your Health, Our Priority</Text>
            <Text style={styles.heroSubtitle}>Book doctors, labs & medicines in minutes</Text>
            <TouchableOpacity style={styles.heroBtn}>
              <Text style={styles.heroBtnText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <View style={styles.quickActions}>
          <FlatList
            data={quickActions}
            numColumns={4}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.actionCard}>
                <View style={[styles.actionIcon, { backgroundColor: item.color + '20' }]}>
                  <Ionicons name={item.icon} size={28} color={item.color} />
                </View>
                <Text style={styles.actionTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
            scrollEnabled={false}
          />
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          {upcomingAppointments.length === 0 ? (
            <View style={styles.emptyCard}>
              <Ionicons name="calendar-clear-outline" size={48} color="#ddd" />
              <Text style={styles.emptyText}>No upcoming appointments</Text>
              <TouchableOpacity style={styles.bookBtn}>
                <Text style={styles.bookBtnText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          ) : (
            upcomingAppointments.map(item => (
              <TouchableOpacity key={item.id} style={styles.appointmentCard}>
                <View style={styles.appointmentHeader}>
                  <Text style={styles.doctorName}>{item.doctor}</Text>
                  <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
                    <Text style={styles.statusText}>{item.status}</Text>
                  </View>
                </View>
                <Text style={styles.speciality}>{item.speciality} • {item.type}</Text>
                <View style={styles.dateRow}>
                  <Ionicons name="calendar-outline" size={16} color="#666" />
                  <Text style={styles.date}>{item.date}</Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </View>

        {/* Popular Doctors */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Doctors Near You</Text>
          <FlatList
            data={popularDoctors}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.doctorCard}>
                <View style={styles.doctorImageContainer}>
                  <Image source={{ uri: 'https://randomuser.me/api/portraits/med/women/45.jpg' }} style={styles.doctorImage} />
                </View>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.specialityText}>{item.speciality}</Text>
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={14} color="#FFD700" />
                  <Text style={styles.rating}>{item.rating} • {item.distance}</Text>
                </View>
                <Text style={styles.fees}>Consultation: ₹{item.fees}</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Bottom padding */}
        <View style={{ height: 80 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Confirmed': return { backgroundColor: '#E6F4EA' };
    case 'Pending Payment': return { backgroundColor: '#FFF4E5' };
    default: return { backgroundColor: '#F0F0F0' };
  }
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  topSearch: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    elevation: 3,
    zIndex: 100,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },

  hero: {
    height: 220,
    marginBottom: 16,
    position: 'relative',
  },

  heroImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  heroOverlay: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
  },

  heroTitle: {
    fontSize: 26,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  heroSubtitle: {
    fontSize: 15,
    color: '#fff',
    marginTop: 4,
    marginBottom: 16,
  },

  heroBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  quickActions: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  actionCard: {
    flex: 1,
    margin: 6,
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },

  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  actionTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
  },

  section: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },

  appointmentCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  appointmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },

  doctorName: {
    fontSize: 16,
    fontWeight: '700',
  },

  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  doctorCard: {
    width: 220,
    marginRight: 12,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: COLORS.card,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  doctorImage: {
    width: '100%',
    height: 140,
  },

  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#444',
    marginTop: 16,
  },

  emptySubtitle: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 24,
  },

  bookNowBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 12,
  },

  bookNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});