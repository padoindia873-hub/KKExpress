import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const bookings = [
  { id: '1', service: 'AC Repair', date: '20 Feb 2026', status: 'Completed' },
  { id: '2', service: 'Plumbing Service', date: '18 Feb 2026', status: 'Pending' },
  { id: '3', service: 'Home Cleaning', date: '15 Feb 2026', status: 'Cancelled' },
];

export default function Bookings() {

  const [filter, setFilter] = useState('All');

  const filteredBookings =
    filter === 'All'
      ? bookings
      : bookings.filter((b) => b.status === filter);

  const renderItem = ({ item }: any) => (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
    >
      <View style={styles.cardTop}>
        <View>
          <Text style={styles.service}>{item.service}</Text>

          <View style={styles.dateRow}>
            <Ionicons name="calendar-outline" size={16} color="#666" />
            <Text style={styles.date}>{item.date}</Text>
          </View>
        </View>

        <View style={styles.rightSection}>
          <View style={[styles.statusBadge, getStatusStyle(item.status)]}>
            <Text style={[styles.statusText, getStatusTextColor(item.status)]}>
              {item.status}
            </Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#bbb" />
        </View>
      </View>
    </Pressable>
  );

  const FilterButton = ({ title }: any) => (
    <TouchableOpacity
      style={[
        styles.filterBtn,
        filter === title && styles.activeFilter,
      ]}
      onPress={() => setFilter(title)}
    >
      <Text
        style={[
          styles.filterText,
          filter === title && styles.activeFilterText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Bookings</Text>

      <View style={styles.filterContainer}>
        <FilterButton title="All" />
        <FilterButton title="Completed" />
        <FilterButton title="Pending" />
        <FilterButton title="Cancelled" />
      </View>

      <FlatList
        data={filteredBookings}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="clipboard-outline" size={50} color="#ccc" />
            <Text style={styles.emptyText}>No bookings found</Text>
          </View>
        }
      />
    </View>
  );
}

/* ---------- Helpers ---------- */

const getStatusStyle = (status: string) => {
  switch (status) {
    case 'Completed':
      return { backgroundColor: '#E6F4EA' };
    case 'Pending':
      return { backgroundColor: '#FFF4E5' };
    case 'Cancelled':
      return { backgroundColor: '#FDECEA' };
    default:
      return {};
  }
};

const getStatusTextColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return { color: '#1E8E3E' };
    case 'Pending':
      return { color: '#E37400' };
    case 'Cancelled':
      return { color: '#D93025' };
    default:
      return {};
  }
};

/* ---------- Styles ---------- */

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 16,
  },

  filterContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },

  filterBtn: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    backgroundColor: '#eee',
    borderRadius: 20,
    marginRight: 10,
  },

  activeFilter: {
    backgroundColor: '#000',
  },

  filterText: {
    fontSize: 13,
    color: '#555',
  },

  activeFilterText: {
    color: '#fff',
    fontWeight: '600'
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginBottom: 14,
    elevation: 3,
  },

  cardPressed: {
    opacity: 0.8,
  },

  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  service: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },

  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  date: {
    marginLeft: 6,
    color: '#666',
  },

  rightSection: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 6,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },

  emptyContainer: {
    alignItems: 'center',
    marginTop: 80,
  },

  emptyText: {
    marginTop: 10,
    color: '#999',
  }

});