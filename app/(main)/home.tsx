import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // ← YEH LINE ADD KAR DO

import { services } from '../../constants/servicesData';
import ServiceCard from '../../components/ServiceCard';
import Banner from '../../components/Banner';
import { COLORS } from '../../constants/Colors';

export default function Home() {
  const [search, setSearch] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const filteredServices = useMemo(() => {
    if (!search.trim()) return services;
    return services.filter(service =>
      service.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const categories = useMemo(() => {
    return [...new Set(filteredServices.map(item => item.category))];
  }, [filteredServices]);

  const toggleCategory = (category: string) => {
    setExpandedCategory(prev => (prev === category ? null : category));
  };

  // Dummy cart count (real mein context se aayega)
  const cartCount = 3;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* FIXED TOP BAR */}
      <View style={styles.topBar}>
        {/* Left: Logo + App Name */}
        <TouchableOpacity style={styles.logoContainer} activeOpacity={0.9}>
          <Image
            source={require('../../assets/images/icon.png')}
            style={styles.logo}
          />
          <Text style={styles.appName}>KK EXPRESS</Text>
        </TouchableOpacity>

        {/* Right: Location + Cart */}
        <View style={styles.rightIcons}>
          {/* Location */}
          <TouchableOpacity style={styles.locationBtn} activeOpacity={0.7}>
            <Ionicons name="location-outline" size={22} color={COLORS.primary} />
            <Text style={styles.locationText}>Patna</Text>
            <Ionicons name="chevron-down" size={16} color="#666" style={{ marginLeft: 2 }} />
          </TouchableOpacity>

          {/* Cart */}
          <TouchableOpacity style={styles.cartBtn} activeOpacity={0.7}>
            <Ionicons name="cart-outline" size={26} color={COLORS.primary} />
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.cartBadgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <FlatList
        data={categories}
        keyExtractor={item => item}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.headerContainer}>
            <Text style={styles.greeting}>Fast & Reliable City Services 👋</Text>

            {/* Search Bar */}
            <View style={styles.searchContainer}>
              <Ionicons name="search-outline" size={20} color="#999" /> {/* ← yahan use ho raha hai */}
              <TextInput
                style={styles.searchInput}
                placeholder="Search services..."
                placeholderTextColor="#aaa"
                value={search}
                onChangeText={setSearch}
                autoCapitalize="none"
              />
            </View>

            {/* Banner */}
            <Banner />

            <Text style={styles.sectionTitle}>All Categories</Text>
          </View>
        }
        renderItem={({ item: category }) => {
          const categoryServices = filteredServices.filter(
            service => service.category === category
          );

          const isExpanded = expandedCategory === category;
          const servicesToShow = isExpanded
            ? categoryServices
            : categoryServices.slice(0, 4);

          return (
            <View style={styles.categoryContainer}>
              <View style={styles.categoryHeader}>
                <Text style={styles.categoryTitle}>{category}</Text>

                {categoryServices.length > 4 && (
                  <TouchableOpacity onPress={() => toggleCategory(category)}>
                    <Text style={styles.viewAll}>
                      {isExpanded ? 'Show Less' : 'View All'}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>

              <FlatList
                data={servicesToShow}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ServiceCard service={item} />}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={styles.row}
              />
            </View>
          );
        }}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // TOP BAR
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
    gap: 20,
  },

  locationBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    marginLeft: 4,
  },

  cartBtn: {
    position: 'relative',
  },

  cartBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: COLORS.danger,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 5,
  },

  cartBadgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },

  // Rest unchanged
  headerContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  greeting: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
    marginBottom: 14,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 18,
    elevation: 6,
    marginBottom: 20,
    height: 52,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '600',
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 14,
  },

  categoryContainer: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  categoryTitle: {
    fontSize: 20,
    fontWeight: '800',
  },

  viewAll: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
  },

  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
});