import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';

type TopBarProps = {
  onPressCart: () => void;
};

export default function TopBar({ onPressCart }: TopBarProps) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Patna');

  const locations = ['Patna', 'Delhi', 'Mumbai', 'Bangalore', 'Kolkata'];

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.card} />

      <View style={styles.topBar}>
        {/* Left: Logo + App Name */}
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.logo}
          />
          <Text style={styles.appName}>KK EXPRESS</Text>
        </View>

        {/* Right: Location + Cart */}
        <View style={styles.rightIcons}>
          {/* Location - Clickable */}
          <TouchableOpacity
            style={styles.locationBtn}
            onPress={() => setModalVisible(true)}
            activeOpacity={0.7}
          >
            <Ionicons name="location-sharp" size={22} color={COLORS.primary} />
            <Text style={styles.locationText}>{selectedLocation}</Text>
            <Ionicons name="chevron-down" size={16} color="#666" style={{ marginLeft: 2 }} />
          </TouchableOpacity>

          {/* Cart */}
          <TouchableOpacity style={styles.cartBtn} onPress={onPressCart} activeOpacity={0.7}>
            <Ionicons name="cart-outline" size={26} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Location Change Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Your Location</Text>

            {locations.map((loc) => (
              <TouchableOpacity
                key={loc}
                style={[
                  styles.locationOption,
                  loc === selectedLocation && styles.selectedOption,
                ]}
                onPress={() => {
                  setSelectedLocation(loc);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.locationOptionText}>{loc}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: StatusBar.currentHeight ? StatusBar.currentHeight + 8 : 44,
    paddingBottom: 12,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    zIndex: 1000,
  },

  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 38,
    height: 38,
    resizeMode: 'contain',
    marginRight: 8,
  },

  appName: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.primary,
  },

  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
  },

  locationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },

  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginLeft: 4,
  },

  cartBtn: {
    position: 'relative',
    padding: 6,
  },

  cartBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: COLORS.danger,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: COLORS.card,
  },

  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: COLORS.card,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '60%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 16,
    textAlign: 'center',
  },
  locationOption: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  selectedOption: {
    backgroundColor: COLORS.primaryLight,
  },
  locationOptionText: {
    fontSize: 16,
    color: COLORS.text,
  },
  closeButton: {
    marginTop: 20,
    paddingVertical: 14,
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});