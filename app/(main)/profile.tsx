import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../context/AuthContext';

export default function Profile() {
  const { logout, mobile } = useAuth();

  const MenuItem = ({ icon, title }: any) => (
    <TouchableOpacity style={styles.menuItem}>
      <View style={styles.menuLeft}>
        <Ionicons name={icon} size={20} color="#333" />
        <Text style={styles.menuText}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#999" />
    </TouchableOpacity>
  );

  const QuickCard = ({ icon, title }: any) => (
    <TouchableOpacity style={styles.quickCard}>
      <Ionicons name={icon} size={24} color="#333" />
      <Text style={styles.quickText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.name}>Verified Customer</Text>
            <Text style={styles.mobile}>{mobile || 'No number'}</Text>
          </View>
          <Ionicons name="pencil-outline" size={20} color="#333" />
        </View>

        {/* Quick Actions */}
        <View style={styles.quickContainer}>
          <QuickCard icon="clipboard-outline" title="My bookings" />
          <QuickCard icon="cart-outline" title="My Cart" />
          <QuickCard icon="headset-outline" title="Help & Support" />
        </View>

        {/* Menu List */}
        <View style={styles.menuContainer}>
          <MenuItem icon="wallet-outline" title="Wallet" />
          <MenuItem icon="star-outline" title="My rating" />
          <MenuItem icon="location-outline" title="Manage addresses" />
          <MenuItem icon="card-outline" title="Payment methods" />
          <MenuItem icon="settings-outline" title="Settings" />
          <MenuItem icon="information-circle-outline" title="About KK City" />

          {/* NEW ADD TO CART SECTION */}
          <MenuItem icon="cart-outline" title="Add to Cart" />
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutButton} onPress={logout}>
          <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },

  header: {
    backgroundColor: '#fff',
    padding: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
  },

  mobile: {
    fontSize: 15,
    color: '#666',
    marginTop: 4,
    fontWeight: '500',
  },

  quickContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
  },

  quickCard: {
    width: '30%',
    backgroundColor: '#F2F2F2',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
  },

  quickText: {
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
    fontWeight: '600',
  },

  menuContainer: {
    marginTop: 12,
    backgroundColor: '#fff',
  },

  menuItem: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },

  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    marginLeft: 14,
    fontSize: 16,
    color: '#111',
    fontWeight: '600',
  },

  logoutButton: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },

  logoutText: {
    marginLeft: 10,
    fontSize: 17,
    color: '#FF3B30',
    fontWeight: '700',
  },
});