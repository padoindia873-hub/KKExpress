import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  RefreshControl,
  Platform,
  SafeAreaView, // ← YEH LINE ADD KI
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';

// Dummy data (real mein API se replace kar dena)
const dummyBookings = [
  {
    id: '1',
    service: 'AC Repair & Servicing',
    category: 'Appliance',
    date: '20 Feb 2026',
    time: '10:30 AM - 12:30 PM',
    status: 'Completed',
    price: 799,
    paymentStatus: 'Paid',
    provider: 'Rahul Kumar',
  },
  {
    id: '2',
    service: 'Bathroom Plumbing & Leak Fix',
    category: 'Plumbing',
    date: '18 Feb 2026',
    time: '02:00 PM - 04:00 PM',
    status: 'Pending',
    price: 450,
    paymentStatus: 'Pending',
    provider: 'Vikram Singh',
  },
  {
    id: '3',
    service: 'Full Home Deep Cleaning',
    category: 'Cleaning',
    date: '15 Feb 2026',
    time: '09:00 AM - 03:00 PM',
    status: 'Cancelled',
    price: 2499,
    paymentStatus: 'Refunded',
    provider: 'Priya Sharma',
  },
];

export default function Bookings() {
  const [filter, setFilter] = useState('All');
  const [refreshing, setRefreshing] = useState(false);

  const filteredBookings = filter === 'All'
    ? dummyBookings
    : dummyBookings.filter(b => b.status === filter);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate API fetch
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  const renderItem = ({ item }: { item: typeof dummyBookings[0] }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.9}
      onPress={() => console.log('Open details for booking:', item.id)}
    >
      <View style={styles.cardHeader}>
        <View style={styles.serviceInfo}>
          <View style={styles.iconCircle}>
            <Ionicons name={getIcon(item.category)} size={24} color="#fff" />
          </View>
          <View>
            <Text style={styles.serviceName}>{item.service}</Text>
            <Text style={styles.provider}>{item.provider}</Text>
          </View>
        </View>

        <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
          <Ionicons name={getStatusIcon(item.status)} size={14} color={getStatusTextColor(item.status).color} />
          <Text style={[styles.statusText, getStatusTextColor(item.status)]}>
            {item.status}
          </Text>
        </View>
      </View>

      <View style={styles.dateRow}>
        <Ionicons name="calendar-outline" size={16} color="#666" />
        <Text style={styles.dateText}>{item.date} • {item.time}</Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>₹{item.price.toLocaleString()}</Text>
        <Text style={styles.paymentStatus}>
          {item.paymentStatus === 'Paid' ? 'Paid via Wallet' : item.paymentStatus}
        </Text>
      </View>

      <View style={styles.actionRow}>
        {item.status === 'Completed' && (
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="star-outline" size={18} color={COLORS.primary} />
            <Text style={styles.actionText}>Rate Now</Text>
          </TouchableOpacity>
        )}

        {item.status === 'Pending' && (
          <>
            <TouchableOpacity style={[styles.actionBtn, styles.cancelBtn]}>
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionBtn}>
              <Text style={styles.actionText}>Track</Text>
            </TouchableOpacity>
          </>
        )}

        {item.status === 'Cancelled' && (
          <TouchableOpacity style={styles.actionBtn}>
            <Ionicons name="refresh-outline" size={18} color={COLORS.primary} />
            <Text style={styles.actionText}>Rebook</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>My Bookings</Text>

      {/* Filter Chips */}
      <View style={styles.filterContainer}>
        {['All', 'Completed', 'Pending', 'Cancelled'].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterChip,
              filter === status && styles.activeChip,
            ]}
            onPress={() => setFilter(status)}
          >
            <Text
              style={[
                styles.filterText,
                filter === status && styles.activeFilterText,
              ]}
            >
              {status}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bookings List */}
      <FlatList
        data={filteredBookings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="calendar-clear-outline" size={60} color="#ddd" />
            <Text style={styles.emptyTitle}>No Bookings Yet</Text>
            <Text style={styles.emptySubtitle}>
              Book your first service and it will appear here
            </Text>
            <TouchableOpacity style={styles.bookNowBtn}>
              <Text style={styles.bookNowText}>Book a Service Now</Text>
            </TouchableOpacity>
          </View>
        }
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
}

/* ---------- Helpers ---------- */

const getIcon = (category: string) => {
  const lower = category.toLowerCase();
  if (lower.includes('appliance') || lower.includes('repair')) return 'hammer-outline';
  if (lower.includes('plumbing')) return 'water-outline';
  if (lower.includes('clean')) return 'sparkles-outline';
  if (lower.includes('beauty')) return 'cut-outline';
  return 'construct-outline';
};

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Completed': return { backgroundColor: '#E6F4EA' };
    case 'Pending': return { backgroundColor: '#FFF4E5' };
    case 'Cancelled': return { backgroundColor: '#FDECEA' };
    default: return { backgroundColor: '#F0F0F0' };
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Completed': return 'checkmark-circle';
    case 'Pending': return 'time-outline';
    case 'Cancelled': return 'close-circle';
    default: return 'help-circle';
  }
};

const getStatusTextColor = (status: string) => {
  switch (status) {
    case 'Completed': return { color: '#1E8E3E' };
    case 'Pending': return { color: '#E37400' };
    case 'Cancelled': return { color: '#D93025' };
    default: return { color: '#666' };
  }
};

/* ---------- Styles ---------- */

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#111',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },

  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },

  filterChip: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#F0F0F0',
    borderRadius: 20,
    marginRight: 12,
  },

  activeChip: {
    backgroundColor: COLORS.primary,
  },

  filterText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },

  activeFilterText: {
    color: '#fff',
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },

  serviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  serviceName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  provider: {
    fontSize: 13,
    color: '#666',
    marginTop: 2,
  },

  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '700',
    marginLeft: 4,
  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  dateText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#555',
  },

  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },

  price: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.primary,
  },

  paymentStatus: {
    fontSize: 13,
    color: '#666',
  },

  actionRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },

  actionBtn: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: COLORS.primaryLight,
    borderRadius: 10,
  },

  cancelBtn: {
    backgroundColor: '#FFEBEE',
  },

  actionText: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.primary,
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