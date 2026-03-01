import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../constants/Colors';

// Dummy data (real mein API se aayega)
const beautyCategories = [
  { id: '1', name: 'Hair Care', icon: 'cut-outline', count: 28 },
  { id: '2', name: 'Skin Care', icon: 'sparkles-outline', count: 35 },
  { id: '3', name: 'Nails', icon: 'finger-print-outline', count: 19 },
  { id: '4', name: 'Makeup', icon: 'brush-outline', count: 22 },
  { id: '5', name: 'Massage', icon: 'body-outline', count: 15 },
  { id: '6', name: 'Facial', icon: 'flower-outline', count: 18 },
] as const;

const popularServices = [
  { id: '1', name: 'Hair Spa + Cut', price: 899, rating: 4.8, reviews: 124, image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?w=500' },
  { id: '2', name: 'Full Body Massage', price: 1499, rating: 4.9, reviews: 89, image: 'https://images.unsplash.com/photo-1600334129128-90a991a988a2?w=500' },
  { id: '3', name: 'Bridal Makeup', price: 4999, rating: 5.0, reviews: 67, image: 'https://images.unsplash.com/photo-1519741497674-8d3a2d8a6a7e?w=500' },
  { id: '4', name: 'Manicure + Pedicure', price: 699, rating: 4.7, reviews: 210, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500' },
] as const;

const topPros = [
  { id: '1', name: 'Priya Salon', rating: 4.9, distance: '1.2 km', priceRange: '₹499–₹2999', image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=500' },
  { id: '2', name: 'Glow Studio', rating: 4.8, distance: '2.5 km', priceRange: '₹399–₹3999', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=500' },
  { id: '3', name: 'Beauty Hub', rating: 4.7, distance: '0.8 km', priceRange: '₹599–₹4999', image: 'https://images.unsplash.com/photo-1562322140-6c60a6e92d24?w=500' },
] as const;

export default function Beauty() {
  const [search, setSearch] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.background} />

      {/* Fixed Search Bar + Filter */}
      <View style={styles.topSearchBar}>
        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search beauty services..."
            placeholderTextColor="#aaa"
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Hero Banner */}
        <View style={styles.heroBanner}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800' }}
            style={styles.bannerImage}
          />
          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>Glow Like Never Before</Text>
            <Text style={styles.bannerSubtitle}>Book top beauty pros at home</Text>
            <TouchableOpacity style={styles.bookNowBtn}>
              <Text style={styles.bookNowText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Popular Services - Horizontal */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Services</Text>
          <FlatList
            data={popularServices}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.popularCard}>
                <Image source={{ uri: item.image }} style={styles.popularImage} />
                <View style={styles.popularInfo}>
                  <Text style={styles.popularName}>{item.name}</Text>
                  <View style={styles.ratingRow}>
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text style={styles.rating}>{item.rating} ({item.reviews})</Text>
                  </View>
                  <Text style={styles.popularPrice}>₹{item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Categories Grid */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Browse Categories</Text>
          <FlatList
            data={beautyCategories}
            numColumns={3}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.categoryCard}>
                <View style={styles.categoryIcon}>
                  <Ionicons 
                    name={item.icon as any} 
                    size={28} 
                    color={COLORS.primary} 
                  />
                </View>
                <Text style={styles.categoryName}>{item.name}</Text>
                <Text style={styles.categoryCount}>{item.count}+ services</Text>
              </TouchableOpacity>
            )}
          />
        </View>

        {/* Top Salons / Pros */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Salons Near You</Text>
          <FlatList
            data={topPros}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity style={styles.proCard}>
                <Image source={{ uri: item.image }} style={styles.proImage} />
                <View style={styles.proInfo}>
                  <Text style={styles.proName}>{item.name}</Text>
                  <View style={styles.proRating}>
                    <Ionicons name="star" size={14} color="#FFD700" />
                    <Text style={styles.proRatingText}>{item.rating}</Text>
                  </View>
                  <Text style={styles.proDistance}>{item.distance} • {item.priceRange}</Text>
                </View>
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

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  topSearchBar: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 12,
    backgroundColor: COLORS.card,
    borderBottomWidth: 1,
    // Use fallback until you add border to COLORS object
    borderBottomColor: COLORS.border ?? '#E5E7EB', // ← changed to a nicer default gray
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

  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: COLORS.text,
  },

  // ... rest of styles remain unchanged
  heroBanner: {
    height: 220,
    marginBottom: 16,
    position: 'relative',
  },

  bannerImage: {
    width: '100%',
    height: '100%',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },

  bannerOverlay: {
    position: 'absolute',
    bottom: 24,
    left: 24,
    right: 24,
  },

  bannerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#fff',
    textShadowColor: 'rgba(0,0,0,0.6)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 8,
  },

  bannerSubtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
    marginBottom: 16,
  },

  bookNowBtn: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  bookNowText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
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

  popularCard: {
    width: 240,
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

  popularImage: {
    width: '100%',
    height: 140,
  },

  popularInfo: {
    padding: 12,
  },

  popularName: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  rating: {
    fontSize: 13,
    color: '#FFD700',
    marginLeft: 4,
  },

  popularPrice: {
    fontSize: 15,
    fontWeight: '600',
    color: COLORS.primary,
    marginTop: 4,
  },

  categoryCard: {
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

  categoryIcon: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.primaryLight,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },

  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
    textAlign: 'center',
  },

  categoryCount: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
  },

  proCard: {
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

  proImage: {
    width: '100%',
    height: 140,
  },

  proInfo: {
    padding: 12,
  },

  proName: {
    fontSize: 16,
    fontWeight: '700',
  },

  proRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },

  proRatingText: {
    fontSize: 13,
    color: '#FFD700',
    marginLeft: 4,
  },

  proDistance: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
});