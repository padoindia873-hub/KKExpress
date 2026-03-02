import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { COLORS } from '../../constants/Colors';

// Header
import AccountHeader from '../../components/account/AccountHeader';

// All Sections (sabhi components import)
import ReferCard from '../../components/account/ReferCard';
import BookingsRatingsSection from '../../components/account/BookingsRatingsSection';
import PaymentMethodsSection from '../../components/account/PaymentMethodsSection';
import PrivacyCenterSection from '../../components/account/PrivacyCenterSection';
import SettingsSection from '../../components/account/SettingsSection';
import SafetyFeaturesSection from '../../components/account/SafetyFeaturesSection';
import LegalSupportSection from '../../components/account/LegalSupportSection';
import ManageAddressSection from '../../components/account/ManageAddressSection';
import AboutSection from '../../components/account/AboutSection';
import WalletCard from '../../components/account/WalletCard';

export default function Account() {
  const { logout } = useAuth();
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* HEADER */}
        <AccountHeader />

        {/* WALLET SECTION */}
        <WalletCard />

        {/* REFER & EARN */}
        <ReferCard/>

        {/* BOOKINGS & RATINGS */}
        <BookingsRatingsSection />

        {/* PAYMENT METHODS */}
        <PaymentMethodsSection />

        {/* PRIVACY CENTER */}
        <PrivacyCenterSection />

        {/* SETTINGS */}
        <SettingsSection
          notifications={notifications}
          setNotifications={setNotifications}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          logout={logout}
        />

        {/* SAFETY FEATURES */}
        <SafetyFeaturesSection />

        {/* LEGAL SUPPORT */}
        <LegalSupportSection />

        {/* MANAGE ADDRESS */}
        <ManageAddressSection />

        {/* ABOUT KK EXPRESS */}
        <AboutSection />

        {/* LOGOUT BUTTON */}
<TouchableOpacity style={styles.logoutButton} onPress={logout}>
  <Text style={styles.logoutText}>Logout</Text>
</TouchableOpacity>

        {/* Bottom padding for scroll feel */}
        <View style={{ height: 120 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 logoutButton: {
  backgroundColor: '#E53935',
  marginHorizontal: 16,
  marginTop: 30,
  paddingVertical: 18,
  borderRadius: 14,
  alignItems: 'center',
  elevation: 4,
},

logoutText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '600',
},
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContent: {
    paddingBottom: 140,
  },
});